import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
private spinner = new BehaviorSubject<boolean>(false)
spinner$ = this.spinner.asObservable()
  constructor() { }
cargando(value:boolean){
  this.spinner.next(value)
}

}
