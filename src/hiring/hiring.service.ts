import { Injectable } from '@nestjs/common';
import { CreateHiringDto } from './dto/create-hiring.dto';
import { UpdateHiringDto } from './dto/update-hiring.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HiringService {
  constructor(  private readonly prima : PrismaService ){}
  create(createHiringDto: CreateHiringDto) {
    return this.prima.hirings.create({data : createHiringDto});
  }

  findAll() {
    return this.prima.hirings.findMany();
  }

  findOne(id: number) {
    return this.prima.hirings.findFirst({where : {id: id}});
  }

  update(id: number, updateHiringDto: UpdateHiringDto) {
    return this.prima.hirings.update({ where: { id: id }, data : updateHiringDto});
  }

  remove(id: number) {
    return this.prima.hirings.delete({where:{id: id}});
  }
}
