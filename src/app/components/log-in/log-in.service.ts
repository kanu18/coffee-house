import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class LogInService {
    private logInCase$ = new Subject<any>();




public getLoggedIn(): Observable<any> {
    return this.logInCase$.asObservable();
}

public updateLoggedIn(message: any): void {
    this.logInCase$.next(message)
}
}
