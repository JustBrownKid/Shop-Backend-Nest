import { IsEmail, IsNotEmpty, IsString, Length, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({ description: 'User email address', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User full name', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Password (6-20 chars)', minLength: 6, maxLength: 20 })
  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @ApiProperty({ description: 'User role', example: 'user', enum: ['admin', 'user'] })
  @IsString()
  @IsNotEmpty()
  @IsIn(['admin', 'user'])
  role: string;
}
