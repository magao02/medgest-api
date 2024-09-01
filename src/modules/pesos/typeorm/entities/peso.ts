import User from '@modules/users/typeorm/entities/user';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pesos')
class Peso {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  valor: number;

  @Column()
  data: Date;

  @ManyToOne(() => User, user => user.pesos)
  gestante: User;
}

export default Peso;
