import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddDepartmentIdFieldInEmployees1616552256943
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'employees',
      new TableColumn({
        name: 'department_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'employees',
      new TableForeignKey({
        name: 'FKDepartmentEmployee',
        referencedTableName: 'departments',
        referencedColumnNames: ['id'],
        columnNames: ['department_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('employees', 'FKDepartmentEmployee');
    await queryRunner.dropColumn('employees', 'department_id');
  }
}
