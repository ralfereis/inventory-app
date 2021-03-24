import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateDepartments1616468917165
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'departments',
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
            length: '80',
            isUnique: true,
          },
          {
            name: 'acronym',
            type: 'varchar',
            length: '9',
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '35',
            isNullable: true,
          },
          {
            name: 'responsible_id',
            type: 'uuid',
          },
          {
            name: 'extension_phone',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'department_id',
            type: 'uuid',
            isNullable: true,
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
            name: 'FKResponsible',
            referencedTableName: 'employees',
            referencedColumnNames: ['id'],
            columnNames: ['responsible_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKDepartments',
            referencedTableName: 'departments',
            referencedColumnNames: ['id'],
            columnNames: ['department_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('departments');
  }
}
