import { Router } from 'express';
import uploadConfig from '@config/upload';
import { celebrate, Joi, Segments } from 'celebrate';
import multer from 'multer';

import ExamesController from '../controllers/examesController';

const examesRouter = Router();
const examesController = new ExamesController();
const upload = multer(uploadConfig);

examesRouter.get(
  '/:gestante_id',
  celebrate({
    [Segments.PARAMS]: {
      gestante_id: Joi.string().uuid().required(),
    },
  }),
  examesController.index,
);

examesRouter.post(
  '/',
  upload.single('arquivo'),
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      data: Joi.date().required(),
      gestante_id: Joi.string().uuid().required(),
    },
  }),
  examesController.create,
);

examesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  examesController.delete,
);

export default examesRouter;
