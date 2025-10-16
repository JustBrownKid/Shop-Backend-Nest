import { IsString, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBlogDto {
  @ApiProperty({ description: 'Blog title', example: 'My first blog' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ description: 'Blog image URL', example: 'https://example.com/image.jpg' })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiProperty({ description: 'Blog content', example: 'This is the blog content...' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'Blog tag ID', example: 1 })
  @IsNumber()
  tag_id: number;
}
