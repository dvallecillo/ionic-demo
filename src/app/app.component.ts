import { Component } from '@angular/core';
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
}
