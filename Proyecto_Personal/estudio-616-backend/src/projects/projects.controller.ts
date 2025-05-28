import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './create-project.dto';
import { UpdateProjectDto } from './update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}


  @Post()
  create(@Body() dto: CreateProjectDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
    return this.service.update(id, dto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
