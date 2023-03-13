// Simple user class
export class User {
  username: string;
  password: string;
  userId: number;

  constructor(username: string, password: string, userId: number) {
    this.username = username;
    this.password = password;
    this.userId = userId;
  }
}
