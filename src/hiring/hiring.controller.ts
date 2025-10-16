import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HiringService } from './hiring.service';
import { CreateHiringDto } from './dto/create-hiring.dto';
import { UpdateHiringDto } from './dto/update-hiring.dto';

@Controller('hiring')
export class HiringController {
  constructor(private readonly hiringService: HiringService) {}

  @Post()
  create(@Body() createHiringDto: CreateHiringDto) {
    return this.hiringService.create(createHiringDto);
  }

  @Get()
  findAll() {
    return this.hiringService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hiringService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHiringDto: UpdateHiringDto) {
    return this.hiringService.update(+id, updateHiringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hiringService.remove(+id);
  }
}
