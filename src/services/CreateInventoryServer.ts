import InventoriesRepository from 'src/repositories/InventoriesRepository';
import { getCustomRepository } from 'typeorm';
import Inventory from '../models/Inventory';

interface Request {
  department_acronym: string;
  employee_registration: string;
  movables: Array<{
    tag_number: string;
    conservation_status: string;
    situation: string;
  }>;
  created_at: Date;
}

class CreateInventoryService {
  public async execute({
    department_acronym,
    employee_registration,
    movables,
    created_at,
  }: Request): Promise<Inventory> {
    const inventoriesRepository = getCustomRepository(InventoriesRepository);

    const inventory = inventoriesRepository.create({
      department_acronym,
      employee_registration,
      movables,
      created_at,
    });

    await inventoriesRepository.save(inventory);

    return inventory;
  }
}
export default CreateInventoryService;
