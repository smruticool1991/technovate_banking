import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }
  spinner = new BehaviorSubject<boolean>(true)
}
