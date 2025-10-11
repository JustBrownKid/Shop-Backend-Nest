import { IsString, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBlogDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNumber()
    tag_id: number;
}
