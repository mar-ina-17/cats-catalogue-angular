import { Injectable } from '@angular/core';

import { User } from '../models/user.class';

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

  returnUser(usrname: string, pass: string): User {
    return this.users.find(
      (user) => user.username == usrname && user.password == pass
    );
  }

  getUsers() {
    return this.users;
  }
}
