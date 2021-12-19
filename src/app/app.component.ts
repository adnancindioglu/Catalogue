import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Catalogue';
  ngOnInit(): void {
      
  }
  constructor(private _location: Location) {

  }
  backClicked() {
    this._location.back();
  }
}
