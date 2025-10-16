import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Order Items')
@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order item' })
  @ApiResponse({ status: 201, description: 'The order item has been successfully created.' })
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemService.create(createOrderItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all order items' })
  @ApiResponse({ status: 200, description: 'Returns an array of order items.' })
  findAll() {
    return this.orderItemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order item by id' })
  @ApiResponse({ status: 200, description: 'Returns the order item details.' })
  findOne(@Param('id') id: string) {
    return this.orderItemService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an order item by id' })
  @ApiResponse({ status: 200, description: 'The order item has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemService.update(+id, updateOrderItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order item by id' })
  @ApiResponse({ status: 200, description: 'The order item has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.orderItemService.remove(+id);
  }
}
