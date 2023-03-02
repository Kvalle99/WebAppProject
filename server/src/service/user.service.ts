import { User } from "../model/user";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

export class UserService {
  users: User[] = [
    new User("eimer", "eimer", 1),
    new User("sebastian", "sebastian", 11),
    new User("alexander", "alexander", 111),
    new User("robin", "robin", 3),
  ];
  constructor() {}
  //this will not be safe just a proof of concept,should be hidden and refreshed from time to time in the real world
  keyString = "6173646667686A6B6CF6706F697579746676626E6D2C6CF6706F6975680A";

  findUser(username: string, password: string): boolean {
    for (var i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username == username &&
        this.users[i].password == password
      ) {
        return true;
      }
    }
    return false;
  }

  getID(username: string): number {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].username == username) {
        return this.users[i].userId;
      }
    }
    throw new Error("user not found");
  }

  async login(user: string, password: string): Promise<string[]> {
    if (this.findUser(user, password)) {
      var userKey = jwt.sign({ User: user }, this.keyString, {
        expiresIn: "2h",
      });
      const id = this.getID(user);
      return [userKey, id.toString()];
    }
    throw new Error("Wrong credentials");
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
