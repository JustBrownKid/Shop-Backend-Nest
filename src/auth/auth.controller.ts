import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { OtpService } from 'src/otp/otp.service';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ResendOtpDto } from './dto/resend-otp.dto';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly otpService: OtpService 
  ) { }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData);
  }

  @Post('resend-otp')
  async resendOtp(@Body() resendData: ResendOtpDto) {
    const { email } = resendData;
    await this.otpService.createOtp(email); 
    
    return { 
      success: true,
      message: 'A new OTP has been sent to your email address.', 
    };
  }

  @Post('verifyOtp')
  async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    const { email, otp } = verifyOtpDto;
    
    return await this.otpService.verifyOtp(email, otp); 
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get('email/:email') 
  findByEmail(@Param('email') email: string) {
    return this.authService.findByEmail(email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}