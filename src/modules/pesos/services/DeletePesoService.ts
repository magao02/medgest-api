import AppError from '@shared/errors/appError';
import { PesosRepository } from '../typeorm/repositories/pesosRepository';

class DeletePesoService {
  private pesosRepository = PesosRepository;

  public async execute(id: string): Promise<void> {
    const peso = await this.pesosRepository.findById(id);

    if (!peso) {
      throw new AppError('Peso not found');
    }

    await this.pesosRepository.delete(id);
  }
}

export default DeletePesoService;
