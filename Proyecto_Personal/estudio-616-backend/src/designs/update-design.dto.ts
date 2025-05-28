import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateDesignDto {
  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  archivoURL?: string;

  @IsOptional()
  @IsInt()
  proyectoId?: number;
}
