import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import morgan from "morgan";
import cors from "cors";
import { ConfigServer } from "./libs";

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv("PROD_DB_PORT");

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.dbConnect();

    this.listen();

    this.app.get("/", (req, res) => {
      res.send("Welcome to the Collar Club API REST made with Node.js and TypeScript 🚀");
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => console.log("Database connected ⚙️"))
      .catch((error) => console.log(error));
  }
}

new ServerBootstrap();