import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from 'class-transformer';


export class CreateLocationDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    latitude: number ;

    @IsNotEmpty()   
    @Type(() => Number)
    @IsNumber()
    longitude: number;

    
}