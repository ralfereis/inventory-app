import { Router } from 'express';
import InventoriesRepository from 'src/repositories/InventoriesRepository';
import CreateInventoryService from 'src/services/CreateInventoryServer';
import { getCustomRepository } from 'typeorm';

const inventoriesRouter = Router();

inventoriesRouter.get('/', (request, response) => {
  const inventoriesRepository = getCustomRepository(InventoriesRepository);

  const inventories = inventoriesRepository.find();

  return response.json(inventories);
});

inventoriesRouter.post('/', async (request, response) => {
  try {
    const {
      department_acronym,
      employee_registration,
      movables,
      created_at,
    } = request.body;

    const createInventory = new CreateInventoryService();

    const inventory = await createInventory.execute({
      department_acronym,
      employee_registration,
      movables,
      created_at,
    });
    return response.json(inventory);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default inventoriesRouter;
