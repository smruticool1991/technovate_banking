import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpinnerService } from './services/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public route: Router, public spinner:SpinnerService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let store_data = localStorage.getItem('token');
      if(store_data !== undefined){
         this.spinner.header_control.next(false)
         return true 
      }else{
        return false;
        //this.route.navigate(['/admin/login'])
      }
   
  }
  
}
