import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
 private notificacion$ = new Subject<SweetAlertOptions>()

  constructor() {
    this.notificacion$.subscribe({
      next:(option)=>{
        Swal.fire(option)}})
  }




mostrarAlert(option:SweetAlertOptions){
this.notificacion$.next(option)}

actualizadoExito(){
  this.notificacion$.next({
    icon:'success',
    title:'Actualizado',
    text:'con exito!'
  })
}

errorNoti(){
  this.notificacion$.next({
    icon:"error",
    title:"Error",
    text:"Email o Contraseña incorrecto!"
  })
}

errorHttp(text:string){
  this.notificacion$.next({
    icon:"error",
    title:"Error",
    text:text
  })
}

}
