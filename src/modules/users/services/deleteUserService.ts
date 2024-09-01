import AppError from '@shared/errors/appError';
import { UsersRepository } from '../typeorm/repositories/usersRepository';

class deleteUserUserService {
  private usersRepository = UsersRepository;

  public async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    await this.usersRepository.softDelete(id);
  }
}

export default deleteUserUserService;
