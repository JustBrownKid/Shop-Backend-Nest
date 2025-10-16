import {IsString, IsNotEmpty, IsOptional,IsArray,ValidateNested,} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDto } from 'src/order-item/dto/create-order-item.dto';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  cusName: string;

  @IsNotEmpty()
  @IsString()
  cusPhone: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsNotEmpty()
  @Type(() => Number)
  total_price: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  order_items?: CreateOrderItemDto[];
}