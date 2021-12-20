import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SliderModel } from 'src/app/models/slider-model/slider.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent {

  constructor(config: NgbCarouselConfig,private catalogueService: CatalogueService) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
    config.pauseOnHover = true;
  }

  sliderModel:SliderModel[] = [];

  ngOnInit(): void {    
    this.sliderList();
  }

  sliderList(): void {
    this.catalogueService.getSliderAll()
      .subscribe(
        data => {
          if(data){
            this.sliderModel = data;
          }
        },
        error => {
          console.log(error);
        });
  }

}
