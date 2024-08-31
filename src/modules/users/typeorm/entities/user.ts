import Glicemia from '@modules/glicemias/typeorm/entities/glicemia';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Glicemia, glicemia => glicemia.gestante)
  glicemias: Glicemia[];

  @Column({ default: true })
  isActive: boolean;
}

export default User;
