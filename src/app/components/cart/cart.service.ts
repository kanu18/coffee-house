// import { Injectable } from '@angular/core';
// // import {Product,CartProduct} from './../types/Products';
// import { Subject }    from 'rxjs';
// import { HttpClient } from '@angular/common/http';


// @Injectable()
// export class CartService {
//  productListt: any = [];

//   private cartUpdates = new Subject<string>();
//   public cartUpdates$ = this.cartUpdates.asObservable();

//   public cartItmes =[];
  

//   constructor(private http:HttpClient) { 

//   }

//   getProductList(){
//     const data = this.http.get('https://random-data-api.com/api/coffee/random_coffee?size=50'); 
//     console.log('data', data)
//     return data;
//     }
  
//   productList:any;
//     getApiresult(){
//       this.getProductList().subscribe((data) => {
//   this.productList = data;
//   console.log('test proddd', this.productList)
//       })
//     }


//     public get count():number{
//         return this.cartItmes.reduce((c,t1) => t1.qty+c,0);
        
//       };
      

//   add(product: any){

//    let item:any = this.productList.find(item => item.id == product.id) ;

//    if(item){ item.qty ++ } else {
//      (product).qty = 1;
//      this.cartItmes.push(product)
//    }

//    this.cartUpdates.next();
//    //test
   
//   }

// }