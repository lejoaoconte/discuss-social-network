import { Router } from "express";

import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";

const routes = Router();

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.findOne);
routes.post("/users", UserController.create);

routes.get("/posts", PostController.index);
routes.get("/posts/:id", PostController.findOne);
routes.post("/posts", PostController.create);

export default routes;
