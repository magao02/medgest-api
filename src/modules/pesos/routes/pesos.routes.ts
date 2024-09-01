import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import PesosController from '../controllers/PesosController';

const pesosRouter = Router();
const pesosController = new PesosController();

pesosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      valor: Joi.number().required(),
      gestante_id: Joi.string().uuid().required(),
      data: Joi.date().required(),
    },
  }),
  pesosController.create,
);

pesosRouter.get(
  '/:gestante_id',
  celebrate({
    [Segments.PARAMS]: {
      gestante_id: Joi.string().uuid().required(),
    },
  }),
  pesosController.index,
);

pesosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  pesosController.delete,
);

export default pesosRouter;
