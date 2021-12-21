import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFavoriteListComponent } from './components/product-favorite-list/product-favorite-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',data: { title: ''}, component: HomeComponent },
  { path: 'category/:id',data: { title: 'Products'}, component: ProductListComponent },
  { path: 'product/:id',data: { title: 'Product-Detail'}, component: ProductDetailComponent },
  { path: 'favorites',data: { title: 'Favorites'}, component: ProductFavoriteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
