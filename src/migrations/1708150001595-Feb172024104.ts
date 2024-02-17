import { MigrationInterface, QueryRunner } from "typeorm";

export class Feb1720241041708150001595 implements MigrationInterface {
    name = 'Feb1720241041708150001595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_orders" DROP COLUMN "total_price"`);
        await queryRunner.query(`ALTER TABLE "product_orders" ADD "total_price" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_orders" DROP COLUMN "total_price"`);
        await queryRunner.query(`ALTER TABLE "product_orders" ADD "total_price" integer NOT NULL`);
    }

    
}
