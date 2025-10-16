import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ResendOtpDto {
  @ApiProperty({ description: 'User email to resend OTP', example: 'user@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
