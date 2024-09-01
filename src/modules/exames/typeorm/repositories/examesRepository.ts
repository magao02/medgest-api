import { dataSource } from '@shared/typeorm';
import Exame from '../entities/exame';

export const GlicemiasRepository = dataSource.getRepository(Exame).extend({
  async findById(id: string): Promise<Exame | null> {
    const glicemia = this.findOne({
      where: { id },
    });
    return glicemia;
  },

  async findByGestanteId(id: string): Promise<Exame[]> {
    const glicemias = this.find({
      where: { gestante: { id: id } },
    });
    return glicemias;
  },
});
