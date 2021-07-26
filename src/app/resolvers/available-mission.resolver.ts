import { IMission } from '../models/app.models';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvailableMissionsService } from '../services/available-missions/available-missions.service';

@Injectable({ providedIn: 'root' })
export class AvailableMissionResolver implements Resolve<IMission> {
  constructor(private availableMissionService: AvailableMissionsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMission> {
    const id = route.paramMap.get('id');
    return this.availableMissionService.getDetails(id);
  }
}
