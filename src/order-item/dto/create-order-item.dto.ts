import {IsString,IsNotEmpty,IsOptional,IsArray,ValidateNested,} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderItemDto {
  @IsNotEmpty() 
  @Type(() => BigInt)
  order_id: bigint;
    
  @IsNotEmpty()
  @Type(() => Number)
  product_id: number;

  @IsNotEmpty()
  @IsString()
  color_name?: string;

  @IsNotEmpty()
  @IsString()
  color_value?: string;

  @IsNotEmpty()
  @Type(() => Number)
  quantity: number;

  @IsNotEmpty()
  @Type(() => Number)
  price: number;
}