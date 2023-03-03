import express, { Request, Response } from "express";
import { UserService } from "../service/user.service";

const userService = new UserService();
export const UserRouter = express.Router();

UserRouter.post(
  "/login",
  async (
    req: Request<{}, {}, { userName: string; password: string }>,
    res: Response<string[]>
  ) => {
    try {
      console.log("in backend");
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
