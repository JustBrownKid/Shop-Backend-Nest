import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService){}

 create(dto: CreateOrderDto) {
  const { order_items, ...orderData } = dto;

  return this.prisma.orders.create({
    data: {
      ...orderData,
      order_items: order_items
        ? {
            create: order_items.map(item => ({
              product_id: item.product_id,
              color_name: item.color_name,
              color_value: item.color_value,
              quantity: item.quantity,
              price: item.price,
            })),
          }
        : undefined,
    },
    include: {
      order_items: true, 
    },
  });
  }
  
  findAll() {
    return this.prisma.orders.findMany({
      include: {
      order_items: {
        include: {
          products: true,
        },
      },
    },
    });
  }

  findOne(id: number) {
    return this.prisma.orders.findFirst({
      where: { id },
      include: { order_items: true }
    });
  }

    update(id: number, dto: UpdateOrderDto) {
      const { order_items, ...orderData  } = dto;

      return this.prisma.orders.update({
        where: { id }, data: {
          ...orderData, 
          order_items: order_items && { deleteMany: {}, create: order_items},
        },
        include: {
          order_items: true
        }
      });
    }

  remove(id: number) {
    return this.prisma.orders.delete({where:{id},include:{order_items:true}});
  }
}
