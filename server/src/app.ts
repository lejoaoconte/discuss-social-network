import express, { Application } from "express";

import mongoose, { ConnectOptions } from "mongoose";

import cors from "cors";

import "dotenv/config";

import routes from "./routes";

class App {
  public express: Application;

  constructor() {
    this.express = express();

    this.moddlewares();
    this.database();
    this.routes();
  }

  private moddlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.pfcx7vz.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions
    );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
