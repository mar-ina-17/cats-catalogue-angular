import { Injectable } from '@angular/core';

import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private currentSession: SessionService) {}

  isAuthenticated() {
    return this.currentSession.existsActiveSession();
  }
}
