import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as moment from 'moment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate() {
    const user = this.authService.getCurrentUser();

    if (user && user.expiration) {
      if (moment() < moment(user.expiration)) {
        return true;
      } else {
        console.log('Your session has expired');
        this.router.navigate(['/sign-in']);
        return false;
      }
    }

    this.router.navigate(['/sign-in']);
    return false;
  }
}
