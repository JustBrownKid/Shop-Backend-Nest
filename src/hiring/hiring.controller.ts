import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { HiringService } from './hiring.service';
import { CreateHiringDto } from './dto/create-hiring.dto';
import { UpdateHiringDto } from './dto/update-hiring.dto';

@ApiTags('hiring')
@Controller('hiring')
export class HiringController {
  constructor(private readonly hiringService: HiringService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new hiring form' })
  @ApiBody({ type: CreateHiringDto })
  @ApiResponse({ status: 201, description: 'Hiring form created successfully.' })
  create(@Body() createHiringDto: CreateHiringDto) {
    return this.hiringService.create(createHiringDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all hiring forms' })
  @ApiResponse({ status: 200, description: 'List of hiring forms.' })
  findAll() {
    return this.hiringService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a hiring form by ID' })
  @ApiParam({ name: 'id', description: 'Hiring form ID' })
  @ApiResponse({ status: 200, description: 'Hiring form retrieved successfully.' })
  findOne(@Param('id') id: string) {
    return this.hiringService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a hiring form by ID' })
  @ApiParam({ name: 'id', description: 'Hiring form ID' })
  @ApiBody({ type: UpdateHiringDto })
  @ApiResponse({ status: 200, description: 'Hiring form updated successfully.' })
  update(@Param('id') id: string, @Body() updateHiringDto: UpdateHiringDto) {
    return this.hiringService.update(+id, updateHiringDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a hiring form by ID' })
  @ApiParam({ name: 'id', description: 'Hiring form ID' })
  @ApiResponse({ status: 200, description: 'Hiring form deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.hiringService.remove(+id);
  }
}
