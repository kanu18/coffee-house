import { NgModule } from '@angular/core';
import {CanActivate, Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProductListComponent } from './components/product-list/product-list.component';
// import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent , canActivate:[]},
   { path: 'product-list', component: ProductListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }