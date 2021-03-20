import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inventories')
class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  department_acronym: string;

  @Column()
  employee_registration: string;

  @Column({
    type: 'jsonb',
    array: false,
    default: () => " '[]' ",
    nullable: false,
  })
  movables: Array<{
    tag_number: string;
    conservation_status: string;
    situation: string;
  }>;

  @Column('timestamp with time zone')
  created_at: Date;
}

export default Inventory;
