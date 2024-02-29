import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, delay, finalize, map, of, tap } from 'rxjs';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { NotificacionService } from '../../core/services/notificacion/notificacion.service';
import { UsuarioModelo } from '../dashbord/paginas/alumnos2/model/index';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { loginAction } from '../../core/store/action';


interface usuario {
email:null | string,
Contraseña: null | string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// usuarios?:UsuarioModelo | null
  constructor(
    private ruta:Router,
    private cargando:SpinnerService,
    private notificacion:NotificacionService,
    private httpClient:HttpClient,
    private store:Store
    ) { }



  getAuthToken(usuario:UsuarioModelo){
    this.store.dispatch(loginAction.setAuthUser({usuario}))
    localStorage.setItem('token',usuario.token)
  }

  login(data:usuario):Observable<UsuarioModelo[]>{
    return this.httpClient.get<UsuarioModelo[]>(
    `${environment.apiURL}/users?Email=${data.email}&Contraseña=${data.Contraseña}`).
    pipe(tap((res)=>{
             if(!!res[0]){
            this.getAuthToken(res[0])
            this.ruta.navigate(['dashbord','home'])
           }else{
            this.notificacion.errorNoti()
            }}))
          
          //  if(data.email === mockUsuario.Email && data.Contraseña === mockUsuario.Contraseña){
  //   this.getAuthToken(mockUsuario)
    // this.usuarios = mockUsuario
    // localStorage.setItem('token','asdasdasdadewfe93429834729');
  //   this.ruta.navigate(['dashbord','home']);
  //  }else{
  //   this.notificacion.errorNoti()
  //  }
          
          }




  logout(){
    this.store.dispatch(loginAction.logout())
    this.ruta.navigate(['login'])
    localStorage.removeItem('token')
  }
  
virificacion(){
  this.cargando.cargando(true)
  // return of(localStorage.getItem('token')).pipe(
  //   delay(1000), 
  //   map((res)=> !!res),
  //   tap(()=>this.getAuthToken(mockUsuario)),
  //   finalize(()=> this.cargando.cargando(false)) )
  return this.httpClient.get<UsuarioModelo[]>(
    `${environment.apiURL}/users?token=${localStorage.getItem('token')}`).
    pipe(map((res)=>{
      if(res.length){
        this.getAuthToken(res[0]);
        return true;
      }else{
        this.store.dispatch(loginAction.logout())
        localStorage.removeItem('token');
        return false
      }
    }),catchError(()=>of (false)),
    finalize(()=>this.cargando.cargando(false)))
}





}



