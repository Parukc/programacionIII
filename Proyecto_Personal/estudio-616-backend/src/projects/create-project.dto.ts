import { IsNotEmpty, IsOptional, IsString, IsDateString, IsIn, IsInt } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsDateString()
  fechaInicio?: Date;

  @IsOptional()
  @IsDateString()
  fechaEntrega?: Date;

  @IsOptional()
  @IsIn(['pendiente', 'en progreso', 'completado'])
  estado?: string;

  @IsNotEmpty()
  @IsInt()
  clienteId: number;
}
