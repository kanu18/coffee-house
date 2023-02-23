import { Component, OnInit } from '@angular/core';
import { ProductInService } from '../product-list/product.service';
//import {CartService} from './../services/cart.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public count:number = 0;
  public priceCount: number = 0;
  private isOpen:boolean =false;
  public previewFlag:boolean = false;
 private inVoiceNo :number;
 public testdata: any = [];
 cartItems:any = [];
  constructor(public cartService:ProductInService, private http:HttpClient, public prodService: ProductInService) { 

  }



  ngOnInit() {

   // console.log('test sesisonn', JSON.parse(sessionStorage.getItem('itemsCart')));
   console.log('test45678', JSON.parse(sessionStorage.getItem("itemsCart")));
   this.testdata =  JSON.parse(sessionStorage.getItem("itemsCart"));
 
   this.testdata.forEach(val => {
    val['price'] = 250;
   this.priceCount += parseInt(val['price']);
   });
  //  this.testdata.forEach((val) => {
  //   console.log('vallll', val.price)
  //   count = count+  parseInt(val.price)})

  const lenghtArr = this.testdata.length;
  console.log('lengtharr', lenghtArr);
 // this.count = lenghtArr * 250;
    this.prodService.getCart().subscribe((data) => {
      console.log('cart data updated', data)
      this.cartItems = data;
      console.log('cart data updated 2', this.cartItems)
    })

//this.testdata = this.cartItems;
    //  this.cartService.getCountIn().subscribe((counttyui)=>{
    //   console.log('gfhj', counttyui)
    //   this.count += 1;
    // });
  // })

  }

 

  checkOut(){
   // this
  }
  

  public openCart():void{
    this.isOpen = true;
  }
  private closeCart():void{
    this.isOpen = false;
    this.previewFlag = false;
  }
  // private removeProduct(item) :void{
  //   console.log(this.cartService)
  //  this.cartService.cartItmes.splice(this.cartService.cartItmes.findIndex(element=>item.id === element.id),1);
  //  this.count= this.cartService.count;
  // }
  private chngQuantity():void{
   // this.count= this.cartService.count;     
  }
  private preview() :void{
    this.previewFlag = true;
    this.inVoiceNo = this.getRandomInt(23443, 23432555);
  }
 
  private getRandomInt(min:any, max: any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

} 