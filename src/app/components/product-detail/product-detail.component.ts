import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ProductInService } from '../product-list/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any;
  id: any;
  valueToShow: any;

  constructor(public _Activatedroute: ActivatedRoute,public prodService: ProductInService,
    private http:HttpClient){}


  ngOnInit(){
  // this.prodService.getProductList().subscribe((data) => {
  //   console.log('testtt dataa', data)
  // })
  this.valueToShow = sessionStorage.getItem("selectedProd");
 // JSON.parse(this.valueToShow);
  this.getProductList();
  this.getApiresult();
this.getDetailsPage(this.valueToShow);

//et alueToShow = JSON.parse(sessionStorage.getItem("selectedProd"));
console.log('test value show', this.valueToShow);


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

  getDetailsPage(id){
    let selectedProd = this.productList.find((item) =>  item.id == id);
    console.log('test namee', this.productList[id])
    console.log('sv', selectedProd)
  }

}