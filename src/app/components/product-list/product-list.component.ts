import { Component } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import { LogInService } from '../log-in/log-in.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

loggedValue: any;

  constructor(
		 private router: Router,
  private logInService: LogInService

  ){}

 ngOnInit(){
  this.loggedValue = sessionStorage.getItem('person')
console.log('lofghjkl', this.loggedValue)
 }

  myData = [{
    columns: [{
      key: 'col_setting',
      label: 'Java Chip Frappuccino',
      rate: '234',
      img: '.\src\assets\cof1.jpg'
    },
    {
      key: 'col_1',
      label: 'Cold Coffee',
      rate: '454',
      img: '.\src\assets\cof2.jpg'

    },
    {
      key: 'col_2',
      label: 'Vanilla Sweet Cold Brew',
      rate: '764',
      img: '.\src\assets\cof3.jpg'

    },
]}]
}