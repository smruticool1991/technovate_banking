import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  
  login(data:any){
    let params = new HttpParams();
    params = params.append('email', data.name)
    params = params.append('password', data.pass)
    // let name = data.name;
    // let pass = data.pass;
    return this.http.post('http://localhost:8000/api/login',{email : data.name, password: data.pass});
  }
}
