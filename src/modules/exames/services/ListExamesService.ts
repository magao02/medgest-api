import { ExamesRepository } from '../typeorm/repositories/examesRepository';
import Exame from '../typeorm/entities/exame';

class ListExamesService {
  private examesRepository = ExamesRepository;

  public async execute(id: string): Promise<Exame[]> {
    const exames = await this.examesRepository.findByGestanteId(id);
    return exames;
  }
}

export default ListExamesService;
