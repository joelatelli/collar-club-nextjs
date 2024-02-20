import { MigrationInterface, QueryRunner } from "typeorm";

export class Feb2020243071708459687557 implements MigrationInterface {
    name = 'Feb2020243071708459687557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "access_token" character varying NOT NULL, "refresh_token" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_3001e89ada36263dabf1fb6210a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e71aa834e0f0afa13cab1b1ea9" ON "tokens" ("access_token") `);
        await queryRunner.query(`ALTER TABLE "customers" ADD "activation_link" character varying`);
        await queryRunner.query(`ALTER TABLE "tokens" ADD CONSTRAINT "FK_d417e5d35f2434afc4bd48cb4d2" FOREIGN KEY ("userId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tokens" DROP CONSTRAINT "FK_d417e5d35f2434afc4bd48cb4d2"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "activation_link"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e71aa834e0f0afa13cab1b1ea9"`);
        await queryRunner.query(`DROP TABLE "tokens"`);
    }

}
