import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private readonly prisma : PrismaService) {}
  create(createLocationDto: CreateLocationDto) {
    return this.prisma.locations.create({ data: createLocationDto})
  }

  findAll() {
    return this.prisma.locations.findMany();
  }

  findOne(id: number) {
    return this.prisma.locations.findFirst({where : {id : id}});
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return this.prisma.locations.update({where : { id } , data: updateLocationDto});
  }

  remove(id: number) {
    return this.prisma.locations.delete({where : {id}});
  }
}
