import { IsNotEmpty, IsString, IsNumber, IsObject } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ description: 'Product image URL', example: 'https://example.com/image.jpg' })
    @IsNotEmpty()
    @IsString()
    image: string;
    
    @ApiProperty({ description: 'Product title', example: 'Awesome T-Shirt' })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ description: 'Vendor name', example: 'Nike' })
    @IsNotEmpty()
    @IsString()
    vendor: string;
    
    @ApiProperty({ description: 'SKU code', example: 'SKU12345' })
    @IsNotEmpty()
    @IsString()
    sku: string;
    
    @ApiProperty({ description: 'Stock quantity', example: '50' })
    @IsNotEmpty()
    @IsString()
    stock: string;

    @ApiProperty({ description: 'Product type', example: 'Clothing' })
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({ description: 'Category ID', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    category_id: number; 

    @ApiProperty({ description: 'Product price', example: '49.99' })
    @IsNotEmpty()
    @IsString()
    price: string; 

    @ApiProperty({ description: 'Available colors', example: { red: '#FF0000', blue: '#0000FF' } })
    @IsNotEmpty()
    @IsObject()
    colors: Record<string, any>;
    
    @ApiProperty({ description: 'Product description', example: { en: 'Nice t-shirt', mm: 'ချစ်စရာ t-shirt' } })
    @IsNotEmpty()
    @IsObject()
    description: Record<string, any>;
    
    @ApiProperty({ description: 'Warranty info', example: { period: '1 year', details: 'Manufacturer warranty' } })
    @IsNotEmpty()
    @IsObject()
    warranty: Record<string, any>;
    
    @ApiProperty({ description: 'Product specification', example: { material: 'Cotton', size: 'M' } })
    @IsNotEmpty()
    @IsObject()
    specification: Record<string, any>;
}
