import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

import "dotenv/config";

import User from "../schemas/User";

export interface AuthControllerInterface extends Document {
  name: string;
  github: string;
  role: string;
}

class AuthController {
  public authorization(req: Request, res: Response, next: NextFunction) {
    const token =
      req?.body?.token ||
      req?.query?.token ||
      req?.params?.token ||
      req.headers["x-access-token"];

    if (!token) {
      res.status(401).json({
        message: "Access denied",
      });
    } else {
      jwt.verify(
        token,
        process.env.SALT_KEY || "",
        function (error: any, decode: any) {
          if (error) {
            res.status(401).json({
              message: "Invalid token",
            });
          } else {
            next();
          }
        }
      );
    }
  }

  public async authentication(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.find({ email, password });

    if (user.length > 0) {
      const { name, github, role } = user[0];
      const token = jwt.sign(
        { name, github, role } as AuthControllerInterface,
        process.env.SALT_KEY || "",
        {
          expiresIn: "1d",
        }
      );

      return res.status(200).send({ name, github, role, token });
    } else {
      return res.status(401).send("User not found");
    }
  }
}

export default new AuthController();
