import { Router } from 'express';

import usersRouter from '@modules/users/routes/users.routes';
import glicemiasRouter from '@modules/glicemias/routes/glicemias.routes';
import pesosRouter from '@modules/pesos/routes/pesos.routes';
import loginRouter from '@modules/users/routes/logins.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.use('/users', usersRouter);
routes.use('/glicemias', glicemiasRouter);
routes.use('/pesos', pesosRouter);
routes.use('/login', loginRouter);

export default routes;
