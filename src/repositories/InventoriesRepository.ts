import { EntityRepository, Repository } from 'typeorm';

import Inventory from '../models/Inventory';

@EntityRepository(Inventory)
class InventoriesRepository extends Repository<Inventory> {
  public async findById(id: string): Promise<Inventory | undefined> {
    const findInventory = await this.findOne(id);
    return findInventory || null;
  }
}

export default InventoriesRepository;
