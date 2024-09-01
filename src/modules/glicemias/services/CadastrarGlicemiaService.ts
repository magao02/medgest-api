import Glicemia from '../typeorm/entities/glicemia';
import { GlicemiasRepository } from '../typeorm/repositories/glicemiasRepository';
import GetGestanteService from '@modules/users/services/getGestanteService';

interface GlicemiaDTO {
  valor: number;
  gestante_id: string;
  data: Date;
}

class CadastrarGlicemiaService {
  private glicemiasRepository = GlicemiasRepository;

  public async execute({
    valor,
    gestante_id,
    data,
  }: GlicemiaDTO): Promise<Glicemia> {
    const getGestanteService = new GetGestanteService();
    const gestante = await getGestanteService.execute(gestante_id);

    if (!gestante) {
      throw new Error('Gestante not found');
    }
    const glicemia = this.glicemiasRepository.create({
      valor,
      gestante,
      data,
    });

    await this.glicemiasRepository.save(glicemia);

    return glicemia;
  }
}

export default CadastrarGlicemiaService;
