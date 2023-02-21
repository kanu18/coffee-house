import { Component, ViewChild, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import { LogInService } from '../log-in/log-in.service';
import { HttpClient } from '@angular/common/http';
import { ProductInService } from './product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator'; 
// import { , MatTableDataSource } from '@angular/material/';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public dataSource: any;    
  
 // public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;


  pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 50;       




  // @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatPaginator) paginator: MatPaginator;
loggedValue: any;

  constructor(
		 private router: Router,
  private logInService: LogInService, private http:HttpClient, public productService: ProductInService

  ){}

 ngOnInit(){
  
  this.loggedValue = sessionStorage.getItem('person')
console.log('lofghjkl', this.loggedValue)
this.getProductList();
this.getApiresult();
 }

 public handlePage(e: any) {
  this.currentPage = e.pageIndex;
  this.pageSize = e.pageSize;
  this.iterator();
}

private iterator() {
  const end = (this.currentPage + 1) * this.pageSize;
  const start = this.currentPage * this.pageSize;
  const part = this.array.slice(start, end);
  this.dataSource = part;
}


getPaginatorData(event){
  console.log(event);
  if(event.pageIndex === this.pageIndex + 1){
     this.lowValue = this.lowValue + this.pageSize;
     this.highValue =  this.highValue + this.pageSize;
    }
 else if(event.pageIndex === this.pageIndex - 1){
    this.lowValue = this.lowValue - this.pageSize;
    this.highValue =  this.highValue - this.pageSize;
   }   
    this.pageIndex = event.pageIndex;
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

  add_to_cart(index: any){
    console.log('index', index)
    this.productService.updateCountIn(index);

  }



//   myData = [{
//     columns: [{
//       key: 'col_setting',
//       label: 'Java Chip Frappuccino',
//       rate: '234',
//       img: '.\src\assets\cof1.jpg'
//     },
//     {
//       key: 'col_1',
//       label: 'Cold Coffee',
//       rate: '454',
//       img: '.\src\assets\cof2.jpg'

//     },
//     {
//       key: 'col_2',
//       label: 'Vanilla Sweet Cold Brew',
//       rate: '764',
//       img: '.\src\assets\cof3.jpg'

//     },
// ]}]
}