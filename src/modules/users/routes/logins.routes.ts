import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import LoginController from '../controllers/loginController';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  loginController.create,
);

export default loginRouter;
