import { Inject, Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  constructor(@Inject('LOCALSTORAGE') private localStorage: Storage) {}

  login(email: string, password: string) {
    return of(true).pipe(
      delay(1000),
      map(() => {
        this.localStorage.setItem(
          'currentUser',
          JSON.stringify({
            email,
            id: 1,
            expiration: moment().add(1, 'minutes').toDate(),
            token: 'asdfghjklzxcvb',
          })
        );

        this.loggedInSubject.next(true);

        return true;
      })
    );
  }

  logout(): void {
    this.loggedInSubject.next(false);
    this.localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    return JSON.parse(this.localStorage.getItem('currentUser'));
  }
}
