import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UserController from '../controllers/UserController';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      role: Joi.string().required(),
      crm: Joi.string(),
      medico: Joi.string(),
      dataNascimento: Joi.date(),
    },
  }),
  usersController.create,
);

usersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.delete,
);

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.index,
);

usersRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      crm: Joi.string(),
      dataNascimento: Joi.date(),
      password: Joi.string(),
      old_password: Joi.string(),
    },
  }),
  usersController.update,
);

usersRouter.get(
  '/medico/:id',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().uuid(),
    },
  }),
  usersController.show,
);

export default usersRouter;
