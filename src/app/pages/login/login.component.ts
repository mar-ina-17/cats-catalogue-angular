import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session/session.service';
import { User } from '../../services/models/index';
import { UsersService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public message: string = '';
  public currentUser: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usrService: UsersService,
    private sessionService: SessionService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.sessionService.existsActiveSession()) {
      this.redirectToHome();
    }
  }

  login() {
    if (
      this.usrService.hasUserLogin(
        this.loginForm.value.username,
        this.loginForm.value.password
      )
    ) {
      this.currentUser = this.usrService.returnUser(
        this.loginForm.value.username,
        this.loginForm.value.password
      );
      this.sessionService.createNewSession(this.currentUser);
      this.router.navigate(['/catalog']);
    } else {
      this.message = 'This user is NOT registered.';
      this.loginForm.reset();
    }
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
