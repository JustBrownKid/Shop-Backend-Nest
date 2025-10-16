import { IsString, IsNotEmpty ,IsOptional} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty({ description: 'ID of the order' })
  @IsOptional()
  @Type(() => BigInt)
  order_id?: bigint;
  
  @ApiProperty({ description: 'ID of the product' })
  @IsNotEmpty()
  @Type(() => Number)
  product_id: number;

  @ApiProperty({ description: 'Name of the color', required: false })
  @IsNotEmpty()
  @IsString()
  color_name?: string;

  @ApiProperty({ description: 'Value of the color', required: false })
  @IsNotEmpty()
  @IsString()
  color_value?: string;

  @ApiProperty({ description: 'Quantity of the product' })
  @IsNotEmpty()
  @Type(() => Number)
  quantity: number;

  @ApiProperty({ description: 'Price of the product' })
  @IsNotEmpty()
  @Type(() => Number)
  price: number;
}
