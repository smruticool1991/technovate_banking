import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(public http: HttpClient) { }
  get(){
    return this.http.get('http://localhost:8000/api/bank');
  }
  edit(id:number){
    return this.http.get(`http://localhost:8000/api/bank/{id}`);
  }
  delete(id:number){
    return this.http.delete('http://localhost:8000/api/bank/{id}');
  }
  update(id:number,data:any){
    return this.http.put('http://localhost:8000/api/bank/{id}',{bank_name: data.bank_name});
  }
}
