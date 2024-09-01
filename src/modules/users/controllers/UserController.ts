import { Request, Response } from 'express';
import CadastrarUserService from '../services/CadastrarUserService';
import deleteUserUserService from '../services/deleteUserService';
import ListGestanteService from '../services/listGestantesService';
import UpdateUserService from '../services/updateUserSerivce';
import GetGestanteService from '../services/getGestanteService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, email, password, role, crm, dataNascimento } = request.body;

    const cadastrarUserService = new CadastrarUserService();

    const user = await cadastrarUserService.execute({
      nome,
      email,
      password,
      role,
      crm,
      dataNascimento,
    });

    return response.status(201).json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserService = new deleteUserUserService();

    await deleteUserService.execute(id);

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listGestanteService = new ListGestanteService();

    const gestantes = await listGestanteService.execute(id);

    return response.json(gestantes);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, email, crm, dataNascimento, password, old_password } =
      request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      id,
      nome,
      email,
      crm,
      dataNascimento,
      password,
      old_password,
    });

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getGestanteService = new GetGestanteService();

    const gestante = await getGestanteService.execute(id);

    return response.json(gestante);
  }
}

export default UserController;
