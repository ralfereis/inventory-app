import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEmployeesPositions1616468122658
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees_positions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '80',
          },
          {
            name: 'employee_id',
            type: 'uuid',
          },
          {
            name: 'symbol',
            type: 'varchar',
            length: '6',
            isNullable: true,
          },
          {
            name: 'situation',
            type: 'varchar',
            length: '6',
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
        foreignKeys: [
          {
            name: 'FKEmployeesPositions',
            referencedTableName: 'employees',
            referencedColumnNames: ['id'],
            columnNames: ['employee_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees_positions');
  }
}
