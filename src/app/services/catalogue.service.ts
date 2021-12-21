import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatalogueModel } from '../models/catelogue-model/catalogue.model';
import { SliderModel } from '../models/slider-model/slider.model';
import { CategoryModel } from '../models/category-model/category-model';
import { ProductModel } from '../models/product-model/product-model';

const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

  getSliderAll(): Observable<SliderModel[]> {
    return this.http.get<SliderModel[]>(`${baseUrl}/sliders`);
  }

  getCategoryAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${baseUrl}/categories`);
  }

  getProductByCategoryAll(id:any): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${baseUrl}/categories/${id}/products`);
  }

  getFavoriteByProductAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${baseUrl}/favorites`);
  }

  updateFavorite(Id:any): Observable<any> {
    return this.http.post(`${baseUrl}/favorites`, {productId:Id});
  }

  getProductDetail(id: any): Observable<ProductModel> {
    return this.http.get(`${baseUrl}/products/${id}`);
  }

}
