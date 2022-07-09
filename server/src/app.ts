import express, { Application } from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
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
      "mongodb+srv://lejoaoconte:IiPhdAniZ8DyFHYA@database.pfcx7vz.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions
    );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
