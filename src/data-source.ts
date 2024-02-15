import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

require('dotenv').config();

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     url: process.env.DATABASE_URL,
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

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PROD_DB_HOSTNAME,
    port: Number(process.env.PROD_DB_PORT || "5432"),
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
    extra: {
        ssl: {
          rejectUnauthorized: false,
        },
    },
});

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "admin",
//     password: "root",
//     database: "collar-club",
//     synchronize: true,
//     logging: true,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
// })
