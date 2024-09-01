import User from '../typeorm/entities/user';
import { UsersRepository } from '../typeorm/repositories/usersRepository';
class ListGestanteService {
  private usersRepository = UsersRepository;
  public async execute(id: string): Promise<User[]> {
    const medico = await this.usersRepository.findById(id);

    if (!medico) {
      throw new Error('Medico not found');
    }

    const gestantes = await this.usersRepository.findByMedico(id);

    return gestantes;
  }
}

export default ListGestanteService;
