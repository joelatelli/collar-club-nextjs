import { MigrationInterface, QueryRunner } from "typeorm";

export class Feb1920249501708397441813 implements MigrationInterface {
    name = 'Feb1920249501708397441813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_35a6b05ee3b624d0de01ee50593"`);
        await queryRunner.query(`ALTER TABLE "favorites" RENAME COLUMN "user_id" TO "customer_id"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_910d46f0ab3b071255bedd1732b" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_910d46f0ab3b071255bedd1732b"`);
        await queryRunner.query(`ALTER TABLE "favorites" RENAME COLUMN "customer_id" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_35a6b05ee3b624d0de01ee50593" FOREIGN KEY ("user_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
