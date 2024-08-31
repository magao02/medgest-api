import User from '@modules/users/typeorm/entities/user';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('glicemias')
class Glicemia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  valor: number;

  @ManyToOne(() => User, user => user.glicemias)
  gestante: User;
}

export default Glicemia;
