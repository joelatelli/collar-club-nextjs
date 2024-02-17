import { MigrationInterface, QueryRunner } from "typeorm";

export class YourMigrationName1708123579808 implements MigrationInterface {
    name = 'YourMigrationName1708123579808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "desc" character varying NOT NULL, "event_url" character varying NOT NULL, "image_url" character varying NOT NULL, "address" character varying NOT NULL, "start_date" character varying NOT NULL, "end_date" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profiles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "age" character varying NOT NULL, "breed" character varying NOT NULL, "weight" character varying NOT NULL, "temperment" character varying NOT NULL, "special_needs" character varying NOT NULL, "last_vaccinated" character varying NOT NULL, "customer_id" uuid, CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "address" character varying NOT NULL, "dni" integer NOT NULL, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "quantity_product" integer NOT NULL, "total_price" integer NOT NULL, "order_id" uuid, "product_id" uuid, CONSTRAINT "PK_73ec4b5952704b8268bed22358e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying NOT NULL, "payment_method" character varying NOT NULL, "customer_id" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "product_name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "category_id" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "category_name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('ADMIN', 'EMPLOYEE')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "city" character varying NOT NULL, "province" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_09f256fb7f9a05f0ed9927f406b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "FK_acf2dea7a30a1fb8dcc104dc4a1" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_orders" ADD CONSTRAINT "FK_45d37655968e29740a00594a4fe" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_orders" ADD CONSTRAINT "FK_8e8bcfcea727ab7d96d60781895" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_9a5f6868c96e0069e699f33e124" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_9a5f6868c96e0069e699f33e124"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9"`);
        await queryRunner.query(`ALTER TABLE "product_orders" DROP CONSTRAINT "FK_8e8bcfcea727ab7d96d60781895"`);
        await queryRunner.query(`ALTER TABLE "product_orders" DROP CONSTRAINT "FK_45d37655968e29740a00594a4fe"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_acf2dea7a30a1fb8dcc104dc4a1"`);
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_09f256fb7f9a05f0ed9927f406b"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "product_orders"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`DROP TABLE "events"`);
    }
}
