import AppError from '@shared/errors/appError';
import Glicemia from '../typeorm/entities/glicemia';
import { GlicemiasRepository } from '../typeorm/repositories/glicemiasRepository';

class ListarGlicemiaService {
  private glicemiasRepository = GlicemiasRepository;

  public async execute(gestante_id: string): Promise<Glicemia[]> {
    const gestante =
      await this.glicemiasRepository.findByGestanteId(gestante_id);

    if (!gestante) {
      throw new AppError('Gestante not found');
    }
    const glicemias =
      await this.glicemiasRepository.findByGestanteId(gestante_id);

    return glicemias;
  }
}

export default ListarGlicemiaService;
