import { Component } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { LogInService } from './log-in.service';
// import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
// import Validation from './utils/validation';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  loginFormControl = new FormControl('');
  form: FormGroup;
  submitted = false;

  // constructor(private formBuilder: FormBuilder) {}

  constructor(
    private router: Router,
    private logInService: LogInService, private formBuilder: FormBuilder
 ){}

 ngOnInit(){
sessionStorage.removeItem('person');
this.form = this.formBuilder.group(
  {
    
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
    ]
 }) }

 get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}


 onSubmit(): void {
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }


  let val: any = this.form.controls['email'].value;
  sessionStorage.setItem('person', val)
  
  this.router.navigate(['product-list']);
  this.logInService.updateLoggedIn(val)
  console.log('test167', JSON.stringify(this.form.value, null, 2));
}

onReset(): void {
  this.submitted = false;
  this.form.reset();
}

  onClickLog(){
    console.log('test', this.loginFormControl.value);
    let val: any = this.loginFormControl.value;
    sessionStorage.setItem('person', val)
    
    this.router.navigate(['product-list']);
    this.logInService.updateLoggedIn(this.loginFormControl.value)

  }
}
