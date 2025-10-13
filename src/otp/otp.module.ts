import { Module , forwardRef } from '@nestjs/common';
import { OtpService } from './otp.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { EmailModule } from 'src/email/email.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [PrismaModule,  forwardRef(() => AuthModule) , EmailModule ,JwtModule.register({
      secret: "e1f5b3c2a6f47d9b8c9a0d4f6e7a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9",
      signOptions : { expiresIn : "2d"}
    })],
  providers: [OtpService],
  exports: [OtpService]
})
export class OtpModule {}
