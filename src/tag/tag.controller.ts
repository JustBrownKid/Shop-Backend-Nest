import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Tags')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({ status: 201, description: 'The tag has been successfully created.' })
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tags' })
  @ApiResponse({ status: 200, description: 'Returns an array of tags.' })
  getAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tag by id' })
  @ApiResponse({ status: 200, description: 'Returns the tag details.' })
  findOne(@Param('id') id: string) {
    return this.tagService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tag by id' })
  @ApiResponse({ status: 200, description: 'The tag has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagService.update(+id, updateTagDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tag by id' })
  @ApiResponse({ status: 200, description: 'The tag has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tagService.remove(+id);
  }
}
