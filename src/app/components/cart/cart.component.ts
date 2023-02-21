import { Component, OnInit } from '@angular/core';
import { ProductInService } from '../product-list/product.service';
//import {CartService} from './../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public count:number = 0;
  private isOpen:boolean =false;
  private previewFlag:boolean = false;
 // private inVoiceNo :number;
  constructor(private cartService:ProductInService) { 

  }

  ngOnInit() {

     this.cartService.getCountIn().subscribe((counttyui)=>{
      console.log('gfhj', counttyui)
      this.count += 1;
    // });
  })



  // private openCart():void{
  //   this.isOpen = true;
  // }
  // private closeCart():void{
  //   this.isOpen = false;
  //   this.previewFlag = false;
  // }
  // private removeProduct(item) :void{
  //   console.log(this.cartService)
  //  // this.cartService.cartItmes.splice(this.cartService.cartItmes.findIndex(element=>item.id === element.id),1);
  //  // this.count= this.cartService.count;
  // }
  // private chngQuantity():void{
  //  // this.count= this.cartService.count;     
  // }
  // private preview() :void{
  //   this.previewFlag = true;
  //   this.inVoiceNo = this.getRandomInt(23443, 23432555);
  // }
 
  // private getRandomInt(min, max) {
  //       return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }

} }