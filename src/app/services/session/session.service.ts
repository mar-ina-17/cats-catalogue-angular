import { Injectable } from '@angular/core';

import { User } from '../user/user.class';
import { Session } from './session.class';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  session: Session = new Session();

  constructor() {}

  createNewSession(user: User) {
    this.session.createSession(user);
  }

  destroyCurrentSession() {
    this.session.destroySession();
  }

  existsActiveSession() {
    return this.session.sessionId;
  }
}
