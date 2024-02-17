import { MigrationInterface, QueryRunner } from "typeorm";

export class Feb16202411411708144925655 implements MigrationInterface {
    name = 'Feb16202411411708144925655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "phone_number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone_number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone_number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "phone_number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "last_name" SET NOT NULL`);
    }
}
