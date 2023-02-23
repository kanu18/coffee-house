import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from './user-log';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  user: User = {
    email: '',
  };
  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  loginCheck(email: any) {
    console.log(email);
    this.user = {
      email: email,

    }

    this.userLoggedIn = email;
    sessionStorage.setItem('isUserLoggedIn', this.userLoggedIn ? "true" : "false");
    sessionStorage.setItem('currentUser', JSON.stringify(this.user));
    this.currentUserSubject.next(this.user);

    return of(this.userLoggedIn).pipe(
      delay(1000),
      tap(val => {
        return this.user;
      })
    );
  }


  logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('isUserLoggedIn');
    this.currentUserSubject.next({
      email: ''
    });
  }

}
