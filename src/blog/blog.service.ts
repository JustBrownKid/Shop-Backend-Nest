import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) { }
  
  create(createBlogDto: CreateBlogDto) {
    return this.prisma.blogs.create({ data: createBlogDto });
  }

  findAll() {
    return this.prisma.blogs.findMany({ include: { tags: true }});
  }

  findOne(id: number) {
    return this.prisma.blogs.findUnique({where: {id: id}, include: { tags: true },});
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blogs.update({ where: { id: id }, data: updateBlogDto});
  }

  remove(id: number) {
    return this.prisma.blogs.delete({where :{id :id}});
  }
}
