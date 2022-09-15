import { Injectable } from '@angular/core';
import { User } from './users.class';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Array<User> = [];

  constructor() {}

  setUser(usr: User) {
    this.users.push(usr);
  }

  hasUser(usr: User): boolean {
    return this.users.some((user) => user.username == usr.username);
  }

  hasUserLogin(usrname: string, pass: string): boolean {
    return this.users.some(
      (user) => user.username == usrname && user.password == pass
    );
  }

  getUsers() {
    return this.users;
  }
}
