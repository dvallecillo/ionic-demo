import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dasboard', icon: 'image' },
    { title: 'Photos', url: '/photos', icon: 'image' },
    {
      title: 'Available Missions',
      url: '/available-missions',
      icon: 'image',
    },
    { title: 'My Missions', url: '/my-missions', icon: 'image' },
    { title: 'Chat', url: '/chat', icon: 'image' },
  ];
  constructor() {}
}
