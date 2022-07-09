import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import User from "../schemas/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);

    return res.json(user);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const id = new ObjectId(String(req.params.id));
    const user = await User.find({ _id: id });
    return res.json(user);
  }
}

export default new UserController();
