import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private readonly prisam : PrismaService) {}

  create(dto: CreateOrderItemDto) {
    const { order_id, ...orderItems } = dto;
    return this.prisam.order_items.create({
      data: {
        order_id: BigInt(order_id),
        ...orderItems
    }});
  }

  findAll() {
    return this.prisam.order_items.findMany({
      include:{orders:true , products:true}
    });
  }

  findOne(id: number) {
    return this.prisam.order_items.findFirst({
      where: { id },
      include: {
        orders: true, 
        products:true
      }
    });
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.prisam.order_items.update({
      where: { id },
      data: updateOrderItemDto
    });
  }

  remove(id: number) {
    return this.prisam.order_items.delete({
      where:{id}
    });
  }
}
