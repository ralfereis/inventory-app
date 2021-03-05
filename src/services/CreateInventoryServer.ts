import InventoriesRepository from 'src/repositories/InventoriesRepository';
import { getCustomRepository } from 'typeorm';
import Inventory from '../models/Inventory';

interface Request {
  acronym_sector: string;
  tag: string;
  state_of_conservation: string;
  created_at: Date;
}

class CreateInventoryService {
  public async execute({
    acronym_sector,
    tag,
    state_of_conservation,
    created_at,
  }: Request): Promise<Inventory> {
    const inventoriesRepository = getCustomRepository(InventoriesRepository);

    const inventory = inventoriesRepository.create({
      acronym_sector,
      tag,
      state_of_conservation,
      created_at,
    });

    await inventoriesRepository.save(inventory);

    return inventory;
  }
}
export default CreateInventoryService;
