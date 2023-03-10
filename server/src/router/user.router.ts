import express, { Request, Response } from "express";
import { IUserService } from "../service/iuser.service";
import { UserService } from "../service/user.service";

const userService : IUserService = new UserService();
export const UserRouter = express.Router();

UserRouter.post(
  "/login",
  async (
    req: Request<{}, {}, { userName: string; password: string }>,
    res: Response<string[]>
  ) => {
    try {
      const token: string[] = await userService.login(
        req.body.userName,
        req.body.password
      );
      res.status(200).send(token);
    } catch (e: any) {
      res.status(401).send(e.message);
    }
  }
);
