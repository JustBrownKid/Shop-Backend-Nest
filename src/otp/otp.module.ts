import { Module , forwardRef } from '@nestjs/common';
import { OtpService } from './otp.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { EmailModule } from 'src/email/email.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [PrismaModule,  forwardRef(() => AuthModule) , EmailModule ,JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions : { expiresIn : "2d"}
    })],
  providers: [OtpService],
  exports: [OtpService]
})
export class OtpModule {}
