import AppError from '@shared/errors/appError';
import { UsersRepository } from '../typeorm/repositories/usersRepository';
import User from '../typeorm/entities/user';

class GetMedicoService {
  private usersRepository = UsersRepository;

  public async execute(id: string): Promise<User> {
    const medico = await this.usersRepository.findById(id);

    if (!medico) {
      throw new AppError('Medico not found', 404);
    }

    return medico;
  }
}

export default GetMedicoService;
