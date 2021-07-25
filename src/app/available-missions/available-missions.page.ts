import { IMission } from './../models/app.models';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-missions',
  templateUrl: './available-missions.page.html',
  styleUrls: ['./available-missions.page.scss'],
})
export class AvailableMissionsPage implements OnInit {
  missions: IMission[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.missions = this.route.snapshot.data.list;
    console.log(this.missions);
  }
}
