import { User } from '../models/index';

const randomString = (length: number) => {
  var randomChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';

  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

export class Session {
  public sessionUser: User;
  public sessionId: string;

  public createSession(user: User) {
    this.sessionUser = user;
    this.sessionId = randomString(40);
  }

  public destroySession() {
    delete this.sessionUser;
    this.sessionId = null;
  }
}
