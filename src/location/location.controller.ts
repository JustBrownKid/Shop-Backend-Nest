import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@ApiTags('location')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new location' })
  @ApiBody({ type: CreateLocationDto })
  @ApiResponse({ status: 201, description: 'Location created successfully.' })
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all locations' })
  @ApiResponse({ status: 200, description: 'List of all locations.' })
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a location by ID' })
  @ApiParam({ name: 'id', description: 'Location ID' })
  @ApiResponse({ status: 200, description: 'Location retrieved successfully.' })
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a location by ID' })
  @ApiParam({ name: 'id', description: 'Location ID' })
  @ApiBody({ type: UpdateLocationDto })
  @ApiResponse({ status: 200, description: 'Location updated successfully.' })
  update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a location by ID' })
  @ApiParam({ name: 'id', description: 'Location ID' })
  @ApiResponse({ status: 200, description: 'Location deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
