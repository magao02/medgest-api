import { dataSource } from '@shared/typeorm';
import Exame from '../entities/exame';

export const ExamesRepository = dataSource.getRepository(Exame).extend({
  async findById(id: string): Promise<Exame | null> {
    const exame = this.findOne({
      where: { id },
    });
    return exame;
  },

  async findByGestanteId(id: string): Promise<Exame[]> {
    const exames = this.find({
      where: { gestante: { id: id } },
    });
    return exames;
  },
});
