import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"


export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
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
