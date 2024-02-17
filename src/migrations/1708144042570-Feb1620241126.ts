import { MigrationInterface, QueryRunner } from "typeorm";

export class Feb16202411261708144042570 implements MigrationInterface {
    name = 'Feb16202411261708144042570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" RENAME COLUMN "lastname" TO "last_name"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "lastname" TO "last_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "last_name" TO "lastname"`);
        await queryRunner.query(`ALTER TABLE "customers" RENAME COLUMN "last_name" TO "lastname"`);
    }

}
