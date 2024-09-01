import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';

import { errors } from 'celebrate';
import AppError from '@shared/errors/appError';
import routes from './routes';
import upload from '@config/upload';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routes);
app.use('/files', express.static(upload.directory));
app.use(errors());

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);
export { app };
