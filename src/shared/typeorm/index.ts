import Glicemia from '@modules/glicemias/typeorm/entities/glicemia';
import Peso from '@modules/pesos/typeorm/entities/peso';
import User from '@modules/users/typeorm/entities/user';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();
export const dataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,

  entities: [User, Peso, Glicemia],
});
