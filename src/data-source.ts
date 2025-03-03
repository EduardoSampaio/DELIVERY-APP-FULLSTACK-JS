import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: false,
    logging: false,
    entities: ["src/core/domain/entities/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})
