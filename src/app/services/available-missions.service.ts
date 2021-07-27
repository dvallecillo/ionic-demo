import { map } from 'rxjs/operators';
import { IMission } from '../models/app.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvailableMissionsService {
  private readonly baseUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getList(): Observable<IMission[]> {
    const url = `${this.baseUrl}films/`;
    return this.http
      .get<any>(url)
      .pipe(
        map((response) => response.results.map((r) => this.mapToMission(r)))
      );
  }

  getDetails(id: string): Observable<IMission> {
    const url = `${this.baseUrl}films/${id}`;
    return this.http
      .get<any>(url)
      .pipe(map((response) => this.mapToMission(response)));
  }

  private mapToMission(response: any): IMission {
    const mission = {
      id: response.episode_id,
      title: response.title,
      description: response.opening_crawl,
      director: response.director,
      producer: response.producer,
    } as IMission;
    return mission;
  }
}
