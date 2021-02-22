import { Router } from 'express';
import { uuid } from 'uuidv4';

const inventoriesRouter = Router();

const inventories = [];

inventoriesRouter.post('/', (request, response) => {
  const { type, location, state, date } = request.body;

  const inventory = {
    id: uuid(),
    type,
    location,
    state,
    date,
  };
  inventories.push(inventory);
  return response.json(inventory);
});

export default inventoriesRouter;
