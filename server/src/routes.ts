import { Router } from "express";

import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";
import AuthController from "./controllers/AuthController";

const routes = Router();

routes.get("/users", AuthController.authorization, UserController.index);
routes.get("/users/:id", AuthController.authorization, UserController.findOne);
routes.post("/users", AuthController.authorization, UserController.create);

routes.get("/posts", AuthController.authorization, PostController.index);
routes.get("/posts/:id", AuthController.authorization, PostController.findOne);
routes.post("/posts", AuthController.authorization, PostController.create);

routes.post("/auth", AuthController.authentication);

export default routes;
