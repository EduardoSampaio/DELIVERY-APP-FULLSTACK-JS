import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1741010591455 implements MigrationInterface {
    name = 'Initial1741010591455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cep" varchar NOT NULL, "number" varchar NOT NULL, "complement" varchar NOT NULL, "neighborhood" varchar NOT NULL, "city" varchar NOT NULL, "state" varchar NOT NULL, "country" varchar NOT NULL, "clientId" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "avatar" varchar, "createdAt" date NOT NULL DEFAULT (CURRENT_TIMESTAMP), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "order_items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantity" varchar NOT NULL, "productId" varchar NOT NULL, "orderId" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "deliverymen" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "avatar" varchar, "createdAt" date NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`CREATE TABLE "order_deliveryman" ("orderId" varchar NOT NULL, "deliverymanId" varchar NOT NULL, PRIMARY KEY ("orderId", "deliverymanId"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" varchar PRIMARY KEY NOT NULL, "deliverymanId" varchar NOT NULL, "clientId" varchar NOT NULL, "Status" varchar NOT NULL, "deliveryCode" varchar NOT NULL, "createdAt" date NOT NULL DEFAULT (CURRENT_TIMESTAMP), "deliveriedAt" date, "canceledAt" date)`);
        await queryRunner.query(`CREATE TABLE "products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "price" decimal NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cep" varchar NOT NULL, "number" varchar NOT NULL, "complement" varchar NOT NULL, "neighborhood" varchar NOT NULL, "city" varchar NOT NULL, "state" varchar NOT NULL, "country" varchar NOT NULL, "clientId" varchar NOT NULL, CONSTRAINT "FK_ae1b6a2290ac79ac41dff9aa574" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_addresses"("id", "cep", "number", "complement", "neighborhood", "city", "state", "country", "clientId") SELECT "id", "cep", "number", "complement", "neighborhood", "city", "state", "country", "clientId" FROM "addresses"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`ALTER TABLE "temporary_addresses" RENAME TO "addresses"`);
        await queryRunner.query(`CREATE TABLE "temporary_order_items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantity" varchar NOT NULL, "productId" varchar NOT NULL, "orderId" varchar NOT NULL, CONSTRAINT "FK_f1d359a55923bb45b057fbdab0d" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_order_items"("id", "quantity", "productId", "orderId") SELECT "id", "quantity", "productId", "orderId" FROM "order_items"`);
        await queryRunner.query(`DROP TABLE "order_items"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_items" RENAME TO "order_items"`);
        await queryRunner.query(`CREATE TABLE "temporary_order_deliveryman" ("orderId" varchar NOT NULL, "deliverymanId" varchar NOT NULL, CONSTRAINT "FK_3734cd38606bf47e9acd91e8f5a" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5b335c34237bbec29c0683c3c16" FOREIGN KEY ("deliverymanId") REFERENCES "deliverymen" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, PRIMARY KEY ("orderId", "deliverymanId"))`);
        await queryRunner.query(`INSERT INTO "temporary_order_deliveryman"("orderId", "deliverymanId") SELECT "orderId", "deliverymanId" FROM "order_deliveryman"`);
        await queryRunner.query(`DROP TABLE "order_deliveryman"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_deliveryman" RENAME TO "order_deliveryman"`);
        await queryRunner.query(`CREATE TABLE "temporary_orders" ("id" varchar PRIMARY KEY NOT NULL, "deliverymanId" varchar NOT NULL, "clientId" varchar NOT NULL, "Status" varchar NOT NULL, "deliveryCode" varchar NOT NULL, "createdAt" date NOT NULL DEFAULT (CURRENT_TIMESTAMP), "deliveriedAt" date, "canceledAt" date, CONSTRAINT "FK_1457f286d91f271313fded23e53" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_orders"("id", "deliverymanId", "clientId", "Status", "deliveryCode", "createdAt", "deliveriedAt", "canceledAt") SELECT "id", "deliverymanId", "clientId", "Status", "deliveryCode", "createdAt", "deliveriedAt", "canceledAt" FROM "orders"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`ALTER TABLE "temporary_orders" RENAME TO "orders"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" RENAME TO "temporary_orders"`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" varchar PRIMARY KEY NOT NULL, "deliverymanId" varchar NOT NULL, "clientId" varchar NOT NULL, "Status" varchar NOT NULL, "deliveryCode" varchar NOT NULL, "createdAt" date NOT NULL DEFAULT (CURRENT_TIMESTAMP), "deliveriedAt" date, "canceledAt" date)`);
        await queryRunner.query(`INSERT INTO "orders"("id", "deliverymanId", "clientId", "Status", "deliveryCode", "createdAt", "deliveriedAt", "canceledAt") SELECT "id", "deliverymanId", "clientId", "Status", "deliveryCode", "createdAt", "deliveriedAt", "canceledAt" FROM "temporary_orders"`);
        await queryRunner.query(`DROP TABLE "temporary_orders"`);
        await queryRunner.query(`ALTER TABLE "order_deliveryman" RENAME TO "temporary_order_deliveryman"`);
        await queryRunner.query(`CREATE TABLE "order_deliveryman" ("orderId" varchar NOT NULL, "deliverymanId" varchar NOT NULL, PRIMARY KEY ("orderId", "deliverymanId"))`);
        await queryRunner.query(`INSERT INTO "order_deliveryman"("orderId", "deliverymanId") SELECT "orderId", "deliverymanId" FROM "temporary_order_deliveryman"`);
        await queryRunner.query(`DROP TABLE "temporary_order_deliveryman"`);
        await queryRunner.query(`ALTER TABLE "order_items" RENAME TO "temporary_order_items"`);
        await queryRunner.query(`CREATE TABLE "order_items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quantity" varchar NOT NULL, "productId" varchar NOT NULL, "orderId" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "order_items"("id", "quantity", "productId", "orderId") SELECT "id", "quantity", "productId", "orderId" FROM "temporary_order_items"`);
        await queryRunner.query(`DROP TABLE "temporary_order_items"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME TO "temporary_addresses"`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cep" varchar NOT NULL, "number" varchar NOT NULL, "complement" varchar NOT NULL, "neighborhood" varchar NOT NULL, "city" varchar NOT NULL, "state" varchar NOT NULL, "country" varchar NOT NULL, "clientId" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "addresses"("id", "cep", "number", "complement", "neighborhood", "city", "state", "country", "clientId") SELECT "id", "cep", "number", "complement", "neighborhood", "city", "state", "country", "clientId" FROM "temporary_addresses"`);
        await queryRunner.query(`DROP TABLE "temporary_addresses"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "order_deliveryman"`);
        await queryRunner.query(`DROP TABLE "deliverymen"`);
        await queryRunner.query(`DROP TABLE "order_items"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
