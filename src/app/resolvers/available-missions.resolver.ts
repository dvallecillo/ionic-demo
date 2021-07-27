import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AvailableMissionsService } from '../services/available-missions.service';
import { IMission } from './../models/app.models';

@Injectable({ providedIn: 'root' })
export class AvailableMissionsResolver implements Resolve<IMission[]> {
  constructor(private availableMissionService: AvailableMissionsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMission[]> {
    return this.availableMissionService.getList();
  }
}
