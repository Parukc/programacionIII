import { IsOptional, IsString, IsDateString, IsIn, IsInt } from 'class-validator';

export class UpdateProjectDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDateString()
  fechaInicio?: Date;

  @IsOptional()
  @IsDateString()
  fechaEntrega?: Date;

  @IsOptional()
  @IsIn(['pendiente', 'en progreso', 'completado'])
  estado?: string;

  @IsOptional()
  @IsInt()
  clienteId?: number;
}
