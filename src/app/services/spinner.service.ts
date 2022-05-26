import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }
  spinner = new BehaviorSubject<boolean>(false)
  header_control = new BehaviorSubject<boolean>(true)
}
