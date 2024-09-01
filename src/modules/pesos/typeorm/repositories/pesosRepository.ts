import { dataSource } from '@shared/typeorm';
import Peso from '../entities/peso';

export const PesosRepository = dataSource.getRepository(Peso).extend({
  async findById(id: string): Promise<Peso | null> {
    const glicemia = this.findOne({
      where: { id },
    });
    return glicemia;
  },

  async findByGestanteId(id: string): Promise<Peso[]> {
    const glicemias = this.find({
      where: { gestante: { id: id } },
    });
    return glicemias;
  },
});
