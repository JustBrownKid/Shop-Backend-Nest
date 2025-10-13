import { Injectable } from '@nestjs/common';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagService {
  constructor(private readonly prisma:PrismaService ){}
  create(createTagInput: CreateTagInput) {
    return this.prisma.tags.create({ data: createTagInput });
  }

  findAll() {
    return this.prisma.tags.findMany({include:{ blogs : true}});
  }

  findOne(id: number) {
    return this.prisma.tags.findUnique({where:{id : id }, include: { blogs: true}});
  }

  update(id: number, updateTagInput: UpdateTagInput) {
    return this.prisma.tags.update({where: {id : id }, data: updateTagInput});
  }

  remove(id: number) {
    return this.prisma.tags.delete({ where: { id : id}});
  }
}
