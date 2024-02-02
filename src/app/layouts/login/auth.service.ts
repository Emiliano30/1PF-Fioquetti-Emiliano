import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, finalize, map, of } from 'rxjs';
import { SpinnerService } from '../../core/spinner/spinner.service';
import { NotificacionService } from '../../core/notificacion/notificacion.service';

let prueba ={
  email:"emi@gmail.com",
  Contraseña:"emiliano"
}
interface usuario {
email:null | string,
Contraseña: null | string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
usuarios?:usuario | null
  constructor(
    private ruta:Router,
    private cargando:SpinnerService,
    private notificacion:NotificacionService) { }



  login(data:usuario):void{
   if(data.email === prueba.email && data.Contraseña === prueba.Contraseña){
    this.usuarios = prueba
    localStorage.setItem('token','asdasdasdadewfe93429834729');
    this.ruta.navigate(['dashbord','home']);
   }else{
    this.notificacion.errorNoti()
   }
   
  }

  logout(){
    this.usuarios=null
    this.ruta.navigate(['login'])
    localStorage.removeItem('token')
  }
  
virificacion(){
  this.cargando.cargando(true)
  return of(localStorage.getItem('token')).pipe(
    delay(1000), 
    map((res)=> !!res),
    finalize(()=> this.cargando.cargando(false)) )
}


}



