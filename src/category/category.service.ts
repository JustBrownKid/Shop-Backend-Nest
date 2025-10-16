import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private readonly prisam : PrismaService){}
  create(createCategorieDto: CreateCategoryDto) {
      return this.prisam.categories.create({data: createCategorieDto});
    }
  
    findAll() {
      return this.prisam.categories.findMany();
    }
  
    findOne(id: number) {
      return this.prisam.categories.findFirst({where : {id}});
    }
  
    update(id: number, updateCategorieDto: UpdateCategoryDto) {
      return this.prisam.categories.update({where:{id}, data: updateCategorieDto});
    }
  
    remove(id: number) {
      return this.prisam.categories.delete({where:{id}});
    }
}
