import AppError from '@shared/errors/appError';
import { GlicemiasRepository } from '../typeorm/repositories/glicemiasRepository';

class DeleteGlicemiaService {
  private glicemiasRepository = GlicemiasRepository;

  public async execute(id: string): Promise<void> {
    const glicemia = await this.glicemiasRepository.findById(id);

    if (!glicemia) {
      throw new AppError('Glicemia not found');
    }

    await this.glicemiasRepository.delete(id);
  }
}

export default DeleteGlicemiaService;
