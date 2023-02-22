import { NgModule } from '@angular/core';
import {CanActivate, Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
// import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent , canActivate:[]},
   { path: 'product-list', component: ProductListComponent },
   { path: 'product-details/:name', component: ProductDetailComponent },
   { path: 'cart', component: CartComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }