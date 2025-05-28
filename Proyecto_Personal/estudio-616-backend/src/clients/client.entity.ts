import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Project } from '../projects/project.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @OneToMany(() => Project, project => project.cliente)
  proyectos: Project[];
}
