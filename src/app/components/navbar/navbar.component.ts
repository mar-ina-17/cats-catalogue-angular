import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public items: MenuItem[] = [];
  public showActiveUserButtons: boolean;
  constructor(private router: Router, private sessionService: SessionService) {}

  ngOnInit(): void {
    if (this.sessionService.existsActiveSession()) {
      this.showActiveUserButtons = false;
    } else {
      this.showActiveUserButtons = true;
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  logOut() {
    this.sessionService.destroyCurrentSession();
    this.router.navigate(['/']);
  }
}
