import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategories implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}