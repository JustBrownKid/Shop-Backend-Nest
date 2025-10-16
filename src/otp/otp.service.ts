import { Injectable, Inject, forwardRef, UnauthorizedException } from '@nestjs/common';
import { randomInt } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { EmailService } from 'src/email/email.service';
import { otpSendMail } from 'src/email/email.templates';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class OtpService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => AuthService)) 
    private readonly authService: AuthService, 
    private readonly mailService: EmailService,
    private readonly jwt : JwtService
  ) { }

  private generateOtp(length = 6): string {
    return randomInt(0, 10 ** length).toString().padStart(length, '0');
  }

  async createOtp(email: string) {
    const user = await this.authService.findByEmail(email); 
    if (!user) {
      throw new UnauthorizedException('Authentication failed: user not found.'); 
    }
    const otp = this.generateOtp(6);
    await this.prisma.otps.deleteMany({ where: { email } });
    await this.prisma.otps.create({
      data: { email, otp },
    });
    await this.mailService.sendMail(
      user.email,
      'Your OTP Verification Code', 
      otpSendMail(user.name, otp)
    );
    return { success: true, message: 'New OTP generated and sent successfully.' };
  }

  async verifyOtp(email: string, otp: string) {
    const record = await this.prisma.otps.findFirst({
      where: { email, otp },
    });
    
    if (!record) {
      return { success: false, message: 'Invalid OTP provided.' }; 
    }
    const fiveMinutesInMilliseconds = 5 * 60 * 1000; 
    if (Date.now() - record.createdAt.getTime() > fiveMinutesInMilliseconds) {
      await this.prisma.otps.delete({ where: { id: record.id } });
      return { success: false, message: 'OTP has expired. Please request a new code.' };
    }
    await this.prisma.otps.delete({ where: { id: record.id } });
    const user = await this.authService.findByEmail(email); 
    if (!user) {
    throw new UnauthorizedException('User data could not be retrieved.');
}
    const payload = { 
        name: user.name, 
        email: user.email,
        sub: user.id,
        role : user.role,
    };
    const token = this.jwt.sign(payload);
    return { success: true, message: 'OTP verified successfully.' , token : token};
  }
}