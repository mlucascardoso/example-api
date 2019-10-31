import { Application, Router } from 'express';

export default (app: Application) => {
  const router = Router();

  router.get('/', (req, res) => {
    return res.json('Oi').status(200);
  });

  app.use('/example', router);
}