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
            isGenerated: true,
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'acquisition_date',
            type: 'timestamptz',
          },
          {
            name: 'incorporation_date',
            type: 'timestamptz',
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
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movables_assets');
  }
}
