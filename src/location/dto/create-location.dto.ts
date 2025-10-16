import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
  @ApiProperty({ description: 'Location title', example: 'Main Office' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Location address', example: '123 Main St, Yangon' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ description: 'Contact phone number', example: '+959123456789' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Latitude coordinate', example: 16.8409 })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'Longitude coordinate', example: 96.1735 })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  longitude: number;
}
