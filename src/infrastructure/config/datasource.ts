import { User } from "@/core/domain/entities/user";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true, // Auto-create database schema
  logging: false,
  entities: [User],
});