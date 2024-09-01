import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import GlicemiasController from '../controllers/GlicemiasController';

const glicemiasRouter = Router();
const glicemiasController = new GlicemiasController();

glicemiasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      valor: Joi.number().required(),
      gestante_id: Joi.string().uuid().required(),
      data: Joi.date().required(),
    },
  }),
  glicemiasController.create,
);

glicemiasRouter.get(
  '/:gestante_id',
  celebrate({
    [Segments.PARAMS]: {
      gestante_id: Joi.string().uuid().required(),
    },
  }),
  glicemiasController.index,
);

glicemiasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  glicemiasController.delete,
);

export default glicemiasRouter;
