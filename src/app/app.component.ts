import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/available-missions', icon: 'image' },
    { title: 'Photos', url: '/available-missions', icon: 'image' },
    {
      title: 'Available Missions',
      url: '/available-missions',
      icon: 'image',
    },
    { title: 'My Missions', url: '/available-missions', icon: 'image' },
    {
      title: 'Chat',
      url: '/available-missionsavailable-missions',
      icon: 'image',
    },
  ];
  constructor() {}
}
