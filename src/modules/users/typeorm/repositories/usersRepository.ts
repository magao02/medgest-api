import { dataSource } from '@shared/typeorm';
import User from '../entities/user';

export const UsersRepository = dataSource.getRepository(User).extend({
  async findByNome(nome: string): Promise<User | null> {
    const filme = this.findOne({ where: { nome } });
    return filme;
  },

  async findByEmail(email: string): Promise<User | null> {
    const user = this.findOne({ where: { email } });
    return user;
  },

  async findById(id: string): Promise<User | null> {
    const user = this.findOne({ where: { id } });
    return user;
  },

  async findByMedico(idMedico: string): Promise<User[]> {
    const gestantes = this.find({ where: { medico: { id: idMedico } } });
    return gestantes;
  },

  async findGestante(idGestante: string): Promise<User | null> {
    const gestante = this.findOne({
      where: { id: idGestante },
      relations: ['medico', 'glicemias'],
    });
    return gestante;
  },

  async softDelete(id: string): Promise<void> {
    await this.update(id, {
      isActive: false,
    });
  },
});
