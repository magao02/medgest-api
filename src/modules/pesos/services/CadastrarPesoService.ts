import GetGestanteService from '@modules/users/services/getGestanteService';
import { PesosRepository } from '../typeorm/repositories/pesosRepository';
import AppError from '@shared/errors/appError';
import Peso from '../typeorm/entities/peso';

interface PesoDTO {
  valor: number;
  gestante_id: string;
  data: Date;
}

class CadastrarPesoService {
  private pesosRepository = PesosRepository;

  public async execute({ valor, gestante_id, data }: PesoDTO): Promise<Peso> {
    const getGestanteService = new GetGestanteService();
    const gestante = await getGestanteService.execute(gestante_id);

    if (!gestante) {
      throw new AppError('Gestante not found');
    }
    const peso = this.pesosRepository.create({
      valor,
      gestante,
      data,
    });

    await this.pesosRepository.save(peso);

    return peso;
  }
}

export default CadastrarPesoService;
