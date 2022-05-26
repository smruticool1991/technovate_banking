import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SpinnerService } from './services/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url:any
  header:any
  constructor( private location: Location, public spinner: SpinnerService){
    this.url = this.location.path();
    this.spinner.header_control.subscribe((data)=>{
       this.header = data
    })
     //console.log(this.location.path())
  }

  title = 'banking';
}
