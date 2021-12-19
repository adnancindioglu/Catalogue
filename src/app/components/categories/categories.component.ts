import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category-model/category-model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }

  categoryModel:CategoryModel[] =[];

  ngOnInit() {
    this.sliderList();
  }

  sliderList(): void {
    this.catalogueService.getCategoryAll()
      .subscribe(
        data => {
          if(data){
            this.categoryModel = data;
            
          }
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
