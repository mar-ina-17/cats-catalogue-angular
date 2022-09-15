import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../services/user/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public errorMsg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usrService: UsersService
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      username: ['', [Validators.required, Validators.maxLength(250)]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  redirectToHome() {
    this.router.navigate(['/']);
  }

  register() {
    if (!this.usrService.hasUser(this.registerForm.value)) {
      this.usrService.setUser(this.registerForm.value);
      this.router.navigate(['/']);
    } else {
      this.errorMsg = 'This user is already registered.';
      this.registerForm.reset();
    }
  }
}
