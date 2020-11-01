import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    /*
      node server + passport library will deal with authentication
      the server has a valid user name for this app: johnpapa
      the server does not verify the password, so anything will work
    */

    const loginInfo = {
      username: userName,
      password: password
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        tap(data => {
          this.currentUser = <IUser>data['user'];
        }),
        catchError(err => of(false))
      );
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
