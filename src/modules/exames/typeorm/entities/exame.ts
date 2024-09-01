import User from '@modules/users/typeorm/entities/user';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exames')
class Exame {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  arquivo: string;

  @Column()
  data: Date;

  @ManyToOne(() => User, user => user.exames)
  gestante: User;
}

export default Exame;
