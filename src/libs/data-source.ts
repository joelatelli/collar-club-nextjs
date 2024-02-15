import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import * as dotenv from "dotenv";

dotenv.config({
  path:
    process.env.NODE_ENV !== undefined
      ? `.${process.env.NODE_ENV.trim()}.env`
      : ".env",
});

const Config: DataSourceOptions = {
  type: "postgres",
  // url: process.env.DATABASE_URL,
  host: process.env.PROD_DB_HOSTNAME,
  port: Number(process.env.PROD_DB_PORT || "5432"),
  username: process.env.PROD_DB_USERNAME,
  password: process.env.PROD_DB_PASSWORD,
  database: process.env.PROD_DB_NAME,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/../migrations/*{.ts,.js}"],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDataSource: DataSource = new DataSource(Config);

// import "reflect-metadata"
// import { DataSource } from "typeorm"
// import { User } from "../entity/User"

// require('dotenv').config();


// export const AppDataSource = new DataSource({
//     type: "postgres",
//     // url: process.env.DATABASE_URL,
//     host: process.env.PROD_DB_HOSTNAME,
//     port: Number(process.env.PROD_DB_PORT || "5432"),
//     username: process.env.PROD_DB_USERNAME,
//     password: process.env.PROD_DB_PASSWORD,
//     database: process.env.PROD_DB_NAME,
//     synchronize: true,
//     logging: true,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
//     extra: {
//         ssl: {
//           rejectUnauthorized: false,
//         },
//     },
// });