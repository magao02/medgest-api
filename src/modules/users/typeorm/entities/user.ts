import Exame from '@modules/exames/typeorm/entities/exame';
import Glicemia from '@modules/glicemias/typeorm/entities/glicemia';
import Peso from '@modules/pesos/typeorm/entities/peso';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'gestante' })
  role: string;

  @Column({ nullable: true })
  crm: string;

  @Column({ nullable: true })
  dataNascimento: Date;

  @ManyToOne(() => User, gestante => gestante.gestantes)
  medico: User;

  @OneToMany(() => User, gestante => gestante.medico)
  gestantes: User[];

  @OneToMany(() => Glicemia, glicemia => glicemia.gestante)
  glicemias: Glicemia[];

  @OneToMany(() => Peso, peso => peso.gestante)
  pesos: Peso[];

  @OneToMany(() => Exame, exame => exame.gestante)
  exames: Peso[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: true })
  isActive: boolean;
}

export default User;
