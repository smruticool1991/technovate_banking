import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }
  admin(){
     window.location.href = "http://162.241.118.120/credit-mobi-website/#/admin/login"
  }
}
