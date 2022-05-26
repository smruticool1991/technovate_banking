import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Config } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, public url: Config) { }
  
  login(data:any){
    let params = new HttpParams();
    params = params.append('email', data.name)
    params = params.append('password', data.pass)
    // let name = data.name;
    // let pass = data.pass;
    return this.http.post(`${this.url.API_URL}/login`,{email : data.name, password: data.pass});
  }
}
