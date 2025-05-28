import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../projects/project.entity';

@Entity()
export class Design {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tipo: string;

  @Column()
  archivoURL: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Project, project => project.disenos)
  proyecto: Project;
}
