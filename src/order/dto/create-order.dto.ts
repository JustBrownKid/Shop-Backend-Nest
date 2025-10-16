import { IsString, IsNotEmpty, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDto } from 'src/order-item/dto/create-order-item.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ description: 'Customer name' })
  @IsNotEmpty()
  @IsString()
  cusName: string;

  @ApiProperty({ description: 'Customer phone number' })
  @IsNotEmpty()
  @IsString()
  cusPhone: string;

  @ApiProperty({ description: 'Customer address' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ description: 'Customer city' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ description: 'Customer state' })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiPropertyOptional({ description: 'Optional note' })
  @IsOptional()
  @IsString()
  note?: string;

  @ApiProperty({ description: 'Total price of the order', type: Number })
  @IsNotEmpty()
  @Type(() => Number)
  total_price: number;

  @ApiPropertyOptional({ description: 'Order status', default: 'pending' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ 
    type: [CreateOrderItemDto],
    description: 'List of order items'
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  order_items?: CreateOrderItemDto[];
}
