import { MigrationInterface, QueryRunner } from "typeorm";

export class Feb16202411071708142841618 implements MigrationInterface {
    name = 'Feb16202411071708142841618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorites" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" character varying NOT NULL, "product_id" uuid NOT NULL, "customer_id" uuid, CONSTRAINT "PK_5ab3fc96a71499f5aa36279febb" PRIMARY KEY ("id", "user_id", "product_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_35a6b05ee3b624d0de01ee5059" ON "favorites" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_003e599a9fc0e8f154b6313639" ON "favorites" ("product_id") `);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "dni"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "province"`);
        await queryRunner.query(`ALTER TABLE "product_orders" DROP COLUMN "quantity_product"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "product_name"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "UQ_b2c0e6085a7061df5f572092103" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "first_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "lastname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "is_verified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "avatar_image_url" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "reset_password_token" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "first_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_verified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar_image_url" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_password_token" character varying`);
        await queryRunner.query(`ALTER TABLE "product_orders" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_orders" ADD "size" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "desc" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "image_url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`CREATE INDEX "IDX_b2c0e6085a7061df5f57209210" ON "customers" ("username") `);
        await queryRunner.query(`CREATE INDEX "IDX_8536b8b85c06969f84f0c098b0" ON "customers" ("email") `);
        await queryRunner.query(`CREATE INDEX "IDX_fe0bb3f6520ee0469504521e71" ON "users" ("username") `);
        await queryRunner.query(`CREATE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_910d46f0ab3b071255bedd1732b" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_003e599a9fc0e8f154b6313639f" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_003e599a9fc0e8f154b6313639f"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_910d46f0ab3b071255bedd1732b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fe0bb3f6520ee0469504521e71"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8536b8b85c06969f84f0c098b0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b2c0e6085a7061df5f57209210"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image_url"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "desc"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "product_orders" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "product_orders" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_password_token"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar_image_url"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_verified"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "reset_password_token"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "avatar_image_url"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "is_verified"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "lastname"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "UQ_b2c0e6085a7061df5f572092103"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "product_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_orders" ADD "quantity_product" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "province" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "dni" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_003e599a9fc0e8f154b6313639"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_35a6b05ee3b624d0de01ee5059"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
    }

}
