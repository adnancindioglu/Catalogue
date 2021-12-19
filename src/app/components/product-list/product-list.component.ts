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

  ngOnInit() {
    this.route.params.subscribe(params => {
      // PARAMS CHANGED ..    

      let id = params['id'];    
      console.log(id);
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
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
