import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from './product.model';
import { map, Observable, tap } from 'rxjs';




@Injectable({
    providedIn: 'root'
})


export class ProductInService {
  prodList: ProductModel[];

    private productCount$ = new Subject<any>();
    private prodCase$ = new Subject<any>();
    
    private cartCase$ = new Subject<any>();


    constructor(private http: HttpClient) { }

    ngOnInit(){
      this.getProductList();
      this.getApiresult();
    }

    getProductList(){
      const data = this.http.get('https://random-data-api.com/api/coffee/random_coffee?size=50'); 
      console.log('data', data)
      return data;
      }
    
    productList:any;
      getApiresult(){
        this.getProductList().subscribe((data) => {
    this.productList = data;
    console.log('test proddd', this.productList)
        })
      }

    // getProductList (){
    //     //return  this.prodList  = product; for local json 
       
           
    //     return this.http.get<ProductModel[]>("https://random-data-api.com/api/coffee/random_coffee?size=50")
    //     .pipe(
    //      map(products => {
    //        return products.map(product => {
    //          return {
    //            ...product
              
    //          };
    //        });
    //      }),tap(products => {
    //        this.setProduct(products);
    //      })
        
    //    );
            
    //            /*tap(products => {
    //              //this.setProduct(products);
    //              this.prodList = products;
    //            }) for single object*/
    //            }
         setProduct(prodList: ProductModel[]) {
           this.prodList = prodList;
          
         }
         getProductById(id: any) {
          console.log('prodddlist', this.prodList)
          // Object.keys(this.productList).filter((t) => {
          //   console.log('ttttt', id)
          //   return t[id] == id
          
              // return this.prodList[id];
                   
           }


public getCountIn(): Observable<any> {
    return this.productCount$.asObservable();
}

public updateCountIn(message: any): void {
    this.productCount$.next(message)
}

public getProduct(): Observable<any> {
  return this.prodCase$.asObservable();
}

public updateProduct(message: any): void {
  this.prodCase$.next(message)
}

public getCart(): Observable<any> {
  return this.cartCase$.asObservable();
}

public updateCart(message: any): void {
  this.cartCase$.next(message)
}

}
