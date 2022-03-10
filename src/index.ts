import { Application } from 'express';
import { MongoLoader } from './loaders/mongo.loader';
import { ServerLoader } from './loaders/server.loader';
import { apiRouter } from './controllers';

async function bootstrap() {
  const conn = new MongoLoader();
  const server: Application = await ServerLoader.initiate();
  server.use(apiRouter);
  const port: number = Number(process.env.PORT) || 3000;
  server.listen(port, () => console.log('server running on ', port));
}

bootstrap();
