import { Request, Response } from 'express';

import CreateExameService from '../services/CreateExameService';
import ListExamesService from '../services/ListExamesService';
import DeleteExameService from '../services/DeleteExameService';

class ExamesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, data, gestante_id } = request.body;
    const arquivo = request.file?.filename;

    const createExameService = new CreateExameService();

    const exame = await createExameService.execute({
      nome,
      arquivo,
      data,
      gestante_id,
    });

    return response.status(201).json(exame);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { gestante_id } = request.params;

    const listExamesService = new ListExamesService();

    const exames = await listExamesService.execute(gestante_id);

    return response.json(exames);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteExameService = new DeleteExameService();

    await deleteExameService.execute(id);

    return response.status(204).send();
  }
}

export default ExamesController;
