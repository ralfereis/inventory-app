import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inventories')
class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  acronym_sector: string;

  @Column()
  tag: string;

  @Column()
  state_of_conservation: string;

  @Column('timestamp with time zone')
  created_at: Date;
}

export default Inventory;
