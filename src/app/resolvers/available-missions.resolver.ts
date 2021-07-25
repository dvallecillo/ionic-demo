import { IMission } from './../models/app.models';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvailableMissionsService } from '../services/available-missions/available-missions.service';

@Injectable({ providedIn: 'root' })
export class AvailableMissionsResolver implements Resolve<IMission[]> {
  constructor(private availableMissionService: AvailableMissionsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMission[]> {
    return this.availableMissionService.getList().pipe(
      map((response) =>
        response.results.map((r) => {
          const mission = {
            id: r.episode_id,
            title: r.title,
            description: r.opening_crawl,
            director: r.director,
            producer: r.producer,
          } as IMission;
          return mission;
        })
      )
    );
  }
}
