import GetGestanteService from '@modules/users/services/getGestanteService';
import { ExamesRepository } from '../typeorm/repositories/examesRepository';
import AppError from '@shared/errors/appError';

interface IRequest {
  nome: string;
  arquivo?: string;
  data: Date;
  gestante_id: string;
}

class CreateExameService {
  async execute({ nome, arquivo, data, gestante_id }: IRequest) {
    const getGestanteService = new GetGestanteService();
    const gestante = await getGestanteService.execute(gestante_id);

    if (!gestante) {
      throw new AppError('Gestante não encontrada');
    }

    const exame = ExamesRepository.create({
      nome,
      arquivo,
      data,
      gestante,
    });

    await ExamesRepository.save(exame);

    return exame;
  }
}

export default CreateExameService;
