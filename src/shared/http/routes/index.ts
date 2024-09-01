import { Router } from 'express';

import usersRouter from '@modules/users/routes/users.routes';
import glicemiasRouter from '@modules/glicemias/routes/glicemias.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.use('/users', usersRouter);
routes.use('/glicemias', glicemiasRouter);

export default routes;
