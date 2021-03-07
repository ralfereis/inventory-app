import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateInventories1614908328532
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inventories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'acronym_sector',
            type: 'varchar',
            isNullable: false,
            length: '6',
          },
          {
            name: 'movable',
            type: 'jsonb',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('inventories');
  }
}
