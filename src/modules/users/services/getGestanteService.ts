import AppError from '@shared/errors/appError';
import User from '../typeorm/entities/user';
import { UsersRepository } from '../typeorm/repositories/usersRepository';

class GetGestanteService {
  private usersRepository = UsersRepository;

  public async execute(id: string): Promise<User> {
    const gestante = await this.usersRepository.findGestante(id);

    if (!gestante) {
      throw new AppError('Gestante not found', 404);
    }

    return gestante;
  }
}

export default GetGestanteService;
