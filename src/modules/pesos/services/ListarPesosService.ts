import AppError from '@shared/errors/appError';
import Peso from '../typeorm/entities/peso';
import { PesosRepository } from '../typeorm/repositories/pesosRepository';

class ListarPesosService {
  private pesosRepository = PesosRepository;

  public async execute(gestante_id: string): Promise<Peso[]> {
    const gestante = await this.pesosRepository.findByGestanteId(gestante_id);

    if (!gestante) {
      throw new AppError('Gestante not found');
    }
    const pesos = await this.pesosRepository.findByGestanteId(gestante_id);

    return pesos;
  }
}

export default ListarPesosService;
