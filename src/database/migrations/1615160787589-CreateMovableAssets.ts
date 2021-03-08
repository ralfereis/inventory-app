import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMovableAssets1615160787589
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movables_assets',
        columns: [
          {
            name: 'tag_number',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'acquisition_date',
            type: 'timestamp with time zone',
          },
          {
            name: 'incorporation_date',
            type: 'timestamp with time zone',
          },
          {
            name: 'value',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'commitment_note',
            type: 'varchar',
          },
          {
            name: 'status_conservation',
            type: 'varchar',
          },
          {
            name: 'warranty_date',
            type: 'timestamp with time zone',
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
    await queryRunner.dropTable('movables_assets');
  }
}
