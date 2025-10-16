import { IsNotEmpty, IsString, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHiringDto {
  @ApiProperty({ description: 'Title of the hiring form', example: 'Frontend Developer' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Sections of the hiring form as JSON object', example: { personalInfo: {}, experience: {} } })
  @IsNotEmpty()
  @IsObject()
  sections: Record<string, any>;
}
