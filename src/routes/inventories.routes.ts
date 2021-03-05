import { Router } from 'express';

const inventoriesRouter = Router();

inventoriesRouter.post('/', (request, response) => {
  return response.json({ message: 'Inventory route created' });
});

export default inventoriesRouter;
