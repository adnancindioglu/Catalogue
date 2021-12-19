import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFavoriteListComponent } from './components/product-favorite-list/product-favorite-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'favorites', component: ProductFavoriteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
