import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({ description: 'User email to verify OTP', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: '6-digit OTP code', example: '123456', minLength: 6, maxLength: 6 })
  @IsNotEmpty()
  @IsString()
  @Length(6, 6)
  otp: string;
}
