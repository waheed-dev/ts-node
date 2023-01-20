import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
const app: Express = express();
dotenv.config();

const AppdataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 333,
  username: 'root',
  password: '',
  database: 'todo',
  synchronize: true,
});
app.get('/', (req: Request, res: Response) => {
  res.send('try');
});

const port = 333;

AppdataSource.initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
    app.listen(port);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

console.log('sd');
