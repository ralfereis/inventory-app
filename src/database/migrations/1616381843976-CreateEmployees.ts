import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEmployees1616381843976
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '127',
          },
          {
            name: 'registration',
            type: 'varchar',
            length: '11',
            isUnique: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '11',
            isUnique: true,
          },
          {
            name: 'employee_type_id',
            type: 'uuid',
          },
          {
            name: 'employee_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'extension_phone',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '40',
            isUnique: true,
          },
          {
            name: 'situation',
            type: 'varchar',
            length: '7',
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
            name: 'FKEmployeesTypes',
            referencedTableName: 'employees_types',
            referencedColumnNames: ['id'],
            columnNames: ['employee_type_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKEmployees',
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
    await queryRunner.dropTable('employees');
  }
}
