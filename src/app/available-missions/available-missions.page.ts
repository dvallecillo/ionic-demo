import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMission } from './../models/app.models';

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
  }
}
