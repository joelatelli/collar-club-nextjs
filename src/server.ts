import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";

const app = express();
const cors = require("cors");

const port = Number(process.env.PROD_DB_PORT || "5432")

app.use(cors());
app.use(express.json());


AppDataSource.initialize()
  .then(async () => {
    app.listen(port, () => {});
  })
  .catch((error) => console.log(error));