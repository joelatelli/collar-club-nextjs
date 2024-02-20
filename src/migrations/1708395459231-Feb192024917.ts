import { MigrationInterface, QueryRunner } from "typeorm";

export class Feb1920249171708395459231 implements MigrationInterface {
    name = 'Feb1920249171708395459231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_910d46f0ab3b071255bedd1732b"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_003e599a9fc0e8f154b6313639f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_35a6b05ee3b624d0de01ee5059"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_5ab3fc96a71499f5aa36279febb"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_36f10ec8288f0d4d1da9d05c22b" PRIMARY KEY ("id", "product_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_36f10ec8288f0d4d1da9d05c22b"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_aea002894354e2e5e510d99b739" PRIMARY KEY ("id", "customer_id", "product_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_aea002894354e2e5e510d99b739"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_36f10ec8288f0d4d1da9d05c22b" PRIMARY KEY ("id", "product_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "customer_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_36f10ec8288f0d4d1da9d05c22b"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_aea002894354e2e5e510d99b739" PRIMARY KEY ("id", "product_id", "customer_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_aea002894354e2e5e510d99b739"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_a7667a154c990752541568552fd" PRIMARY KEY ("id", "customer_id")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_003e599a9fc0e8f154b6313639"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "product_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_a7667a154c990752541568552fd"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_aea002894354e2e5e510d99b739" PRIMARY KEY ("id", "customer_id", "product_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_910d46f0ab3b071255bedd1732" ON "favorites" ("customer_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_003e599a9fc0e8f154b6313639" ON "favorites" ("product_id") `);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_e747534006c6e3c2f09939da60f" FOREIGN KEY ("userId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_0c7bba48aac77ad13092685ba5b" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_0c7bba48aac77ad13092685ba5b"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_e747534006c6e3c2f09939da60f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_003e599a9fc0e8f154b6313639"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_910d46f0ab3b071255bedd1732"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_aea002894354e2e5e510d99b739"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_a7667a154c990752541568552fd" PRIMARY KEY ("id", "customer_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "product_id" uuid NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_003e599a9fc0e8f154b6313639" ON "favorites" ("product_id") `);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_a7667a154c990752541568552fd"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_aea002894354e2e5e510d99b739" PRIMARY KEY ("id", "product_id", "customer_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_aea002894354e2e5e510d99b739"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_36f10ec8288f0d4d1da9d05c22b" PRIMARY KEY ("id", "product_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "customer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_36f10ec8288f0d4d1da9d05c22b"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_aea002894354e2e5e510d99b739" PRIMARY KEY ("id", "product_id", "customer_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_aea002894354e2e5e510d99b739"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_36f10ec8288f0d4d1da9d05c22b" PRIMARY KEY ("id", "product_id")`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "user_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "PK_36f10ec8288f0d4d1da9d05c22b"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "PK_5ab3fc96a71499f5aa36279febb" PRIMARY KEY ("id", "user_id", "product_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_35a6b05ee3b624d0de01ee5059" ON "favorites" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_003e599a9fc0e8f154b6313639f" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_910d46f0ab3b071255bedd1732b" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
