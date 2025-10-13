import { Body, Controller, Get,Param,Post , Patch , Delete } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';

@Controller('tag')
export class TagController {
    constructor(private readonly tagService: TagService) { }
    
    @Post()
    create(@Body() createTagInput: CreateTagInput) {
        return this.tagService.create(createTagInput);
    }
        
    @Get()
    getAll() {
       return  this.tagService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tagService.findOne(+id)
    }

    @Patch(':id')
      update(@Param('id') id: string, @Body() updateTagInput : UpdateTagInput) {
        return this.tagService.update(+id, updateTagInput);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.tagService.remove(+id);
      }
}
