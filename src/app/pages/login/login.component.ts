import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterComponent } from '../register/register.component';
import { UsersService } from '../../services/user/users.service';

enum PageState {
  default = 0,
  errorState = 1,
  sucessState = 2,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMsg: string = '';
  public state: PageState = PageState.default;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usrService: UsersService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(250)]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    if (
      this.usrService.hasUserLogin(
        this.loginForm.value.username,
        this.loginForm.value.password
      )
    ) {
      this.state = PageState.sucessState;
      this.errorMsg = 'You logged in!';
    } else {
      this.state = PageState.errorState;
      this.errorMsg = 'This user is NOT registered.';
      this.loginForm.reset();
    }
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
