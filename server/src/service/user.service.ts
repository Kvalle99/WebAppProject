import { User } from "../model/user";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import { IUserService } from "./iuser.service";

export class UserService implements IUserService{
  users: User[] = [
    new User("eimer", "eimer", 1),
    new User("sebastian", "sebastian", 11),
    new User("alexander", "alexander", 111),
    new User("robin", "robin", 3),
  ];
  constructor() {}
  //this will not be safe just a proof of concept,should be hidden and refreshed from time to time in the real world
  keyString = "6173646667686A6B6CF6706F697579746676626E6D2C6CF6706F6975680A";

  findUser(username: string, password: string): User | undefined {
    for (var i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username == username &&
        this.users[i].password == password
      ) {
        return this.users[i];
      }
    }
    return;
  }

  private getID(username: string): number {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].username == username) {
        return this.users[i].userId;
      }
    }
    throw new Error("user not found");
  }

  async login(user: string, password: string): Promise<string[]> {
    const loggedUser = this.findUser(user, password);

    if (loggedUser != undefined) {
      var userKey = jwt.sign({ User: loggedUser.userId }, this.keyString, {
        expiresIn: "2h",
      });
      const id = loggedUser.userId;
      return [userKey, id.toString()];
    }
    throw new Error("Wrong credentials");
  }

  checkUser(userKey: string): number {
    if (jwt.verify(userKey, this.keyString)) {
      return this.getUser(userKey);
    } else throw new Error("Wrong credentials");
  }

  getUser(token: string) : number {
    var decoded: any = jwt_decode(token);
    console.log("signed user: " + decoded);
    return decoded.User;
  }
}
