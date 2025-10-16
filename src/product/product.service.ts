import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisam : PrismaService){}
  create(createProductDto: CreateProductDto) {
    return this.prisam.products.create({data:createProductDto});
  }

  findAll() {
    return this.prisam.products.findMany({
      include: {
        categories:true
    }});
  }

  findOne(id: number) {
    return this.prisam.products.findFirst({
      where: { id },
      include: {
        categories:true
      }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisam.products.update({where:{id}, data:updateProductDto});
  }

  remove(id: number) {
    return this.prisam.products.delete({where:{id}});
  }
}
