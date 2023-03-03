import { User } from "../model/user";

export interface IUserService {
    findUser(username: string, password: string): User | undefined;
    
    login(user: string, password: string): Promise<string[]>;
    
    checkUser(userKey: string): number;
    
    getUser(token: string) : number;
}