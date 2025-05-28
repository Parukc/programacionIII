import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DesignsService } from './designs.service';
import { CreateDesignDto } from './create-design.dto';
import { UpdateDesignDto } from './update-design.dto';

@Controller('designs')
export class DesignsController {
  constructor(private readonly service: DesignsService) {}


  @Post()
  create(@Body() dto: CreateDesignDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDesignDto) {
    return this.service.update(id, dto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
