import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class ProductInService {
    private productCount$ = new Subject<any>();




public getCountIn(): Observable<any> {
    return this.productCount$.asObservable();
}

public updateCountIn(message: any): void {
    this.productCount$.next(message)
}
}