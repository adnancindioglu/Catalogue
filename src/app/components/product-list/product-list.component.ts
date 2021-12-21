import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model/product-model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private catalogueService: CatalogueService) { }

  productModel:ProductModel[]=[];
  isSuccess:boolean=false;
  ngOnInit() {
    this.route.params.subscribe(params => {
      // PARAMS CHANGED ..    

      let id = params['id'];    
      this.productList(id);
      
  });
    
  }

  productList(id:any): void {
    this.catalogueService.getProductByCategoryAll(id)
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
          this.isSuccess = true;
          setTimeout(()=>{
            this.isSuccess = false;
          },1000);
        },
        error => {
          console.log(error);
        });
  }

}
