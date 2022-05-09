import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url:any
  constructor( private location: Location){
    this.url = this.location.path();
     //console.log(this.location.path())
  }

  title = 'banking';
}
