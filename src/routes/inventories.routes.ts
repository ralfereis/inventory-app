import { Router } from 'express';

const inventoriesRouter = Router();

inventoriesRouter.post('/', (request, response) => {
  return response.json({ message: 'Invetories routes is working' });
});

export default inventoriesRouter;
