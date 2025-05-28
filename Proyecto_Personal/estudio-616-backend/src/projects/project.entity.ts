import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Client } from '../clients/client.entity';
import { Design } from '../designs/design.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaEntrega: Date;

  @Column()
  estado: string;

  @ManyToOne(() => Client, client => client.proyectos)
  cliente: Client;

  @OneToMany(() => Design, design => design.proyecto)
  disenos: Design[];
}
