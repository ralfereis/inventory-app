import InventoriesRepository from 'src/repositories/InventoriesRepository';
import { getCustomRepository } from 'typeorm';
import Inventory from '../models/Inventory';

interface Request {
  acronym_sector: string;
  movable: Array<{ tag_number: string; conservation_status: string }>;
  created_at: Date;
}

class CreateInventoryService {
  public async execute({
    acronym_sector,
    movable,
    created_at,
  }: Request): Promise<Inventory> {
    const inventoriesRepository = getCustomRepository(InventoriesRepository);

    const inventory = inventoriesRepository.create({
      acronym_sector,
      movable,
      created_at,
    });

    await inventoriesRepository.save(inventory);

    return inventory;
  }
}
export default CreateInventoryService;
