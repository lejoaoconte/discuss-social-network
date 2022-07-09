import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import Post from "../schemas/Post";
import User from "../schemas/User";

class PostController {
  public async index(req: Request, res: Response): Promise<Response> {
    const posts = await Post.find();
    return res.json(posts);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const posts = await Post.create(req.body);

    return res.json(posts);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const id = new ObjectId(String(req.params.id));
    const post = await Post.find({ _id: id });

    const id_user = new ObjectId(String(post[0].user));
    const user = await User.find({ _id: id_user });

    return res.json({ post: post[0], user: user[0] });
  }
}

export default new PostController();
