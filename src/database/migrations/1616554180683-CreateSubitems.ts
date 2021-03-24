import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSubitems1616554180683 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'subitems',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'account',
            type: 'integer',
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '127',
            isUnique: true,
          },
          {
            name: 'useful_life',
            type: 'integer',
            isUnique: true,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('subitems');
  }
}
