import { User } from "../model/user";

// Service for calls concerning users
export interface IUserService { 
    // Logs in user and returns token
    login(user: string, password: string): Promise<string[]>;

  // Checks if the user is logged in and verified, returns the user id
    checkUser(userKey: string): number;
}