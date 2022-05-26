import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Config } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(public http: HttpClient, public url: Config) { }
  add(data:any){
    return this.http.post(`${this.url.API_URL}/bank`,{bank_name : data})
  }
  get(){
    return this.http.get(`${this.url.API_URL}/bank`);
  }
  edit(id:number){
    return this.http.get(`${this.url.API_URL}/bank/${id}`);
  }
  delete(id:number){
    return this.http.delete(`${this.url.API_URL}/bank/${id}`);
  }
  update(id:number,data:any){
    return this.http.put(`${this.url.API_URL}/bank/${id}`,{bank_name: data.bank_name});
  }
  data = new Subject()
}
