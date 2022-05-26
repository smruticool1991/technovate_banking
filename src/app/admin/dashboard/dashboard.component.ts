import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';
// import * as Chartist from 'chartist';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _spinner:SpinnerService) { 
    this._spinner.header_control.next(false)
  }

  ngOnInit(): void {
  }

}
