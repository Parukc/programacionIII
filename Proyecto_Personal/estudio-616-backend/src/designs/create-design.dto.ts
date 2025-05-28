import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateDesignDto {
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  archivoURL?: string;

  @IsNotEmpty()
  @IsInt()
  proyectoId: number;
}

