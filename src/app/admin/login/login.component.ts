import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status:any
  spinner:boolean = false
  constructor(private _userService: UserService, public router:Router, public _spinner: SpinnerService) { }

  ngOnInit(): void {
    this._spinner.header_control.next(false)
      this._spinner.spinner.subscribe(data=>{
        this.spinner = data
      })
  }
  submit(heroform:any){
    this._spinner.spinner.next(true)
    this._userService.login(heroform.value).subscribe( data =>{
      this.status = data

      console.log(this.status)
        if(this.status.success.status == 200){
             localStorage.setItem('token', this.status.success.token);
             this.router.navigate(['/admin/dashboard'])
        }
    },error=>{
      this._spinner.spinner.next(false)
    },()=>{
      this._spinner.spinner.next(false)
    })
  }
}
