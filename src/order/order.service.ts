import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisam: PrismaService){}

  create(dto: CreateOrderDto) {
    const { order_items, ...orderData  } = dto;

   return this.prisam.orders.create({
    data: {
    ... orderData,
    order_items: order_items && { create: order_items },
    },
    include: { order_items: true },
    });
    }

  findAll() {
    return this.prisam.orders.findMany({
      include:{order_items : true}
    });
  }

  findOne(id: number) {
    return this.prisam.orders.findFirst({
      where: { id },
      include: { order_items: true }
    });
  }

    update(id: number, dto: UpdateOrderDto) {
      const { order_items, ...orderData  } = dto;

      return this.prisam.orders.update({
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
    return this.prisam.orders.delete({where:{id},include:{order_items:true}});
  }
}
