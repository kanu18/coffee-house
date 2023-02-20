import { Component } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { LogInService } from './log-in.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  loginFormControl = new FormControl('');

  constructor(
    private router: Router,
    private logInService: LogInService
 ){}

 ngOnInit(){
sessionStorage.removeItem('person');
  this.loginFormControl.setValue('kanu.priya1@ibm.com')
 }
 //value="kanu.priya1@ibm.com"

  onClickLog(){
    console.log('test', this.loginFormControl.value);
    let val: any = this.loginFormControl.value;
    sessionStorage.setItem('person', val)
    
    this.router.navigate(['product-list']);
    this.logInService.updateLoggedIn(this.loginFormControl.value)

  }
}
