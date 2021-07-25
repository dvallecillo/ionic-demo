import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AvailableMissionsService {
  private readonly baseUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getList() {
    const url = `${this.baseUrl}films/`;
    return this.http.get<any>(url);
  }
}
