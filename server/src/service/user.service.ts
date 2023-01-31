import { User } from "../model/user";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

export class UserService {
  //this will not be safe just a proof of concept
  keyString = "6173646667686A6B6CF6706F697579746676626E6D2C6CF6706F6975680A";

  async login(user: string, password: string): Promise<string> {
    //if(in database (user, password)) {
    var userKey = jwt.sign({ User: user }, this.keyString, { expiresIn: "2h" });

    return userKey;
  }

  async checkUser(userKey: string): Promise<Boolean> {
    if (jwt.verify(userKey, this.keyString)) return true;
    else return false;
  }

  async getUser(user: string): Promise<string> {
    var decoded: any = await jwt_decode(user);
    return decoded.User;
  }
}
