import { Request, Response } from 'express';

import CadastrarPesoService from '../services/CadastrarPesoService';
import ListarPesosService from '../services/ListarPesosService';
import DeletePesoService from '../services/DeletePesoService';

class PesosController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { valor, gestante_id, data } = request.body;

    const cadastrarPesoService = new CadastrarPesoService();

    const peso = await cadastrarPesoService.execute({
      valor,
      gestante_id,
      data,
    });

    return response.status(201).json(peso);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { gestante_id } = request.params;

    const listarPesosService = new ListarPesosService();

    const pesos = await listarPesosService.execute(gestante_id);

    return response.json(pesos);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePesoService = new DeletePesoService();

    await deletePesoService.execute(id);

    return response.status(204).send();
  }
}

export default PesosController;
