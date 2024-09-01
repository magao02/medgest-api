import GetGestanteService from '@modules/users/services/getGestanteService';
import { ExamesRepository } from '../typeorm/repositories/examesRepository';

interface IRequest {
  nome: string;
  arquivo: string;
  data: Date;
  gestanteId: string;
}

class CreateExameService {
  async execute({ nome, arquivo, data, gestanteId }: IRequest) {
    const getGestanteService = new GetGestanteService();
    const gestante = await getGestanteService.execute(gestanteId);

    if (!gestante) {
      throw new Error('Gestante não encontrada');
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
