import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model/product-model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-product-favorite-list',
  templateUrl: './product-favorite-list.component.html',
  styleUrls: ['./product-favorite-list.component.scss']
})
export class ProductFavoriteListComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }

  productModel:ProductModel[]=[];

  ngOnInit() {
    this.favoriteByProductList();
    
  }

  favoriteByProductList(): void {
    this.catalogueService.getFavoriteByProductAll()
      .subscribe(
        data => {
          if(data){
            this.productModel = data;
            
          }
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
