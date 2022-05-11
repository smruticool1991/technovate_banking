import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status:any
  constructor(private _userService: UserService, public router:Router) { }

  ngOnInit(): void {
  }
  submit(heroform:any){
    this._userService.login(heroform.value).subscribe( data =>{
      this.status = data
        if(this.status.status == 200){
             this.router.navigate(['/admin/dashboard'])
        }
    })
  }
}
