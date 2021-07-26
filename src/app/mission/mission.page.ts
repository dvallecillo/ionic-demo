import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMission } from './../models/app.models';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  mission: IMission;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.mission = this.route.snapshot.data.mission;
  }
}
