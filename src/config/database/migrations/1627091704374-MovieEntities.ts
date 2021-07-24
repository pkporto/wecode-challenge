import {MigrationInterface, QueryRunner} from "typeorm";

export class MovieEntities1627091704374 implements MigrationInterface {
    name = 'MovieEntities1627091704374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Movies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "genre" character varying NOT NULL, "watchers" integer, CONSTRAINT "PK_3c3d780a38fe84af75495a4099f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Movies"`);
    }

}
