import { Injectable } from '@nestjs/common';
import { CreateHiringDto } from './dto/create-hiring.dto';
import { UpdateHiringDto } from './dto/update-hiring.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HiringService {
  constructor(  private readonly priam : PrismaService ){}
  create(createHiringDto: CreateHiringDto) {
    return this.priam.hirings.create({data : createHiringDto});
  }

  findAll() {
    return this.priam.hirings.findMany();
  }

  findOne(id: number) {
    return this.priam.hirings.findFirst({where : {id: id}});
  }

  update(id: number, updateHiringDto: UpdateHiringDto) {
    return this.priam.hirings.update({ where: { id: id }, data : updateHiringDto});
  }

  remove(id: number) {
    return this.priam.hirings.delete({where:{id: id}});
  }
}
