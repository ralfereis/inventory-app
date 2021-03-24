import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMovables1616555607338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movables',
        columns: [
          {
            name: 'tag_number',
            type: 'serial',
            generationStrategy: 'increment',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'acquisition_date',
            type: 'date',
          },
          {
            name: 'incorporation_date',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'acquisition_value',
            type: 'decimal',
            precision: 5,
          },
          {
            name: 'subitem_id',
            type: 'uuid',
          },
          {
            name: 'department_id',
            type: 'uuid',
          },
          {
            name: 'entry_type_id',
            type: 'uuid',
          },
          {
            name: 'process_number',
            type: 'varchar',
            length: '19',
            isNullable: true,
          },
          {
            name: 'commitment_note',
            type: 'varchar',
            length: '11',
            isNullable: true,
          },
          {
            name: 'status_conservation',
            type: 'varchar',
            length: '7',
          },
          {
            name: 'situation',
            type: 'varchar',
            length: '13',
          },
          {
            name: 'notation',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKSubitemMovables',
            referencedTableName: 'subitems',
            referencedColumnNames: ['id'],
            columnNames: ['subitem_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKDepartmentMovable',
            referencedTableName: 'departments',
            referencedColumnNames: ['id'],
            columnNames: ['department_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKEntryTypeMovable',
            referencedTableName: 'entries_types',
            referencedColumnNames: ['id'],
            columnNames: ['entry_type_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movables');
  }
}
