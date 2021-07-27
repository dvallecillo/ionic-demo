import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    { title: 'Dashboard', icon: 'image' },
    { title: 'Photos', icon: 'image' },
    {
      title: 'Available Missions',
      url: '/available-missions',
      icon: 'image',
    },
    { title: 'My Missions', icon: 'image' },
    {
      title: 'Chat',
      icon: 'image',
    },
  ];

  get loggedIn$() {
    return this.authService.loggedIn$;
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signOut() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }
}
