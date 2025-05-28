import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Design } from './design.entity';
import { DesignsService } from './designs.service';
import { DesignsController } from './designs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Design])],
  controllers: [DesignsController],
  providers: [DesignsService],
})
export class DesignsModule {}
