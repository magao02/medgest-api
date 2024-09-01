import { Router } from 'express';

import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.use('/users', usersRouter);

export default routes;
