import AppError from '@shared/errors/appError';
import { ExamesRepository } from '../typeorm/repositories/examesRepository';

class DeleteExameService {
  private examesRepository = ExamesRepository;

  public async execute(id: string): Promise<void> {
    const exame = await this.examesRepository.findById(id);

    if (!exame) {
      throw new AppError('Exame not found');
    }

    await this.examesRepository.delete(id);
  }
}

export default DeleteExameService;
