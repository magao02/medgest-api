import { Request, Response } from 'express';

import CadastrarGlicemiaService from '../services/CadastrarGlicemiaService';
import ListarGlicemiaService from '../services/ListarGlicemiaService';
import DeleteGlicemiaService from '../services/DeleteGlicemiaService';

class GlicemiasController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { valor, gestante_id, data } = request.body;

    const cadastrarGlicemiaService = new CadastrarGlicemiaService();

    const glicemia = await cadastrarGlicemiaService.execute({
      valor,
      gestante_id,
      data,
    });

    return response.status(201).json(glicemia);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { gestante_id } = request.params;

    const listarGlicemiaService = new ListarGlicemiaService();

    const glicemias = await listarGlicemiaService.execute(gestante_id);

    return response.json(glicemias);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteGlicemiaService = new DeleteGlicemiaService();

    await deleteGlicemiaService.execute(id);

    return response.status(204).send();
  }
}

export default GlicemiasController;
