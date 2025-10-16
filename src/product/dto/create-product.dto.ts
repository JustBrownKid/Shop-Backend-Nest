import { IsNotEmpty, IsString, IsNumber, IsOptional, IsJSON,IsObject } from "class-validator";
import { Type } from 'class-transformer';

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    image: string;
    
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    vendor: string;
    
    @IsNotEmpty()
    @IsString()
    sku: string;
    
    @IsNotEmpty()
    @IsString()
    stock: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    category_id: number; 

    @IsNotEmpty()
    @IsString()
    price: string; 

    @IsNotEmpty()
    @IsObject()
    colors: Record<string, any>;
    
    @IsNotEmpty()
    @IsObject()
    description: Record<string, any>;
    
    @IsNotEmpty()
    @IsObject()
    warranty: Record<string, any>;
    
    @IsNotEmpty()
    @IsObject()
    specification: Record<string, any>;
   

}