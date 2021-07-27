import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.authService.logout();
    this.createForm();
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService.login(email.toLowerCase(), password).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error.error);
      }
    );
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
}
