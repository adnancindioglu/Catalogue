import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model/product-model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private catalogueService: CatalogueService) { }

  productModel:ProductModel= new ProductModel();

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];   
      this.productDetail(id);
      
  });
    
  }

  productDetail(id:any): void {
    this.catalogueService.getProductDetail(id)
      .subscribe(
        data => {
          if(data){
            this.productModel = data;
            
          }
        },
        error => {
          console.log(error);
        });
  }

  favorite(value:any,productId:any){
    this.catalogueService.updateFavorite(productId)
      .subscribe(
        data => {
          
        },
        error => {
          console.log(error);
        });
  }

}
