import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  all:boolean = true
  credit:boolean = true
  saving:boolean = true
  loan:boolean = true
  investment:boolean = true
  all_f(){
    this.credit = true
    this.loan = true
    this.saving = true
    this.investment = true
  }
  credit_f(){
    this.credit = true
    this.saving = false
    this.loan = false
    this.investment = false
  }
  saving_f(){
    this.saving = true
    this.credit = false
    this.loan = false
    this.investment = false
  }
  loan_f(){
    this.loan = true
    this.credit = false
    this.saving = false
    this.investment = false
  }
  investment_f(){
    this.investment = true
    this.credit = false
    this.loan = false
    this.saving = false
  }
  constructor() { }

  ngOnInit(): void {
  }
  images = [
    { path: '../assets/images/slider/Aditya_Birla.png', id: '1', title: 'Image 1' },
    { path: '../assets/images/slider/Axis_Bank.png', id: '2', title: 'Image 2' },
    { path: '../assets/images/slider/Bajaj_Finserv.png', id: '3', title: 'Image 3' },
    { path: '../assets/images/slider/hdfc.png', id: '4', title: 'Image 4' },
    { path: '../assets/images/slider/kotak.png', id: '5', title: 'Image 5' },
    { path: '../assets/images/slider/sbi.png', id: '6', title: 'Image 6' }
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    navSpeed: 70,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 }
    }
  }
}
