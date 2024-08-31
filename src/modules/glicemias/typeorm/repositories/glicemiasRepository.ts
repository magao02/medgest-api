import { dataSource } from '@shared/typeorm';
import Glicemia from '../entities/glicemia';

export const GlicemiasRepository = dataSource.getRepository(Glicemia).extend({
  async findById(id: string): Promise<Glicemia | null> {
    const glicemia = this.findOne({
      where: { id },
    });
    return glicemia;
  },

  async findByGestanteId(id: string): Promise<Glicemia[]> {
    const glicemias = this.find({
      where: { gestante: { id: id } },
    });
    return glicemias;
  },
});
