import { Injectable, Pipe } from '@angular/core';

import { Observable, catchError, delay, finalize, mergeMap, of, tap } from 'rxjs';
import { NotificacionService } from '../notificacion/notificacion.service';
import { UsuarioModelo } from '../../../layouts/dashbord/paginas/alumnos2/model';
import { SpinnerService } from '../spinner/spinner.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Paginador } from '../../modelo-paginador/index';

let provincias:string[]=["Mendoza","Buenos Aires","Cordoba","San Luis"]

const ciudades1:string[] = ["Maipú","Godoy Cruz","Lujan","Las Heras"]
const ciudades2:string[] = ['Merlo','Moreno','Morón','Quilmes','Pilar','Tigre']
const ciudades3:string[] = ['Río Cuarto','Villa Carlos Paz','Villa María','San Francisco','Jesús María','Cosquín']
const ciudades4:string[] = ['Villa Mercedes','Villa de Merlo','Juana Koslay','La Punta',]

let Rol:string[]=['Admin','User']


let listaAlumnos=['7993']


@Injectable({
  providedIn: 'root'
})
export class ListaService {

constructor(
  private alerta:NotificacionService,
  private cargando:SpinnerService,
  private httpClient:HttpClient
  ) {
  }


 generateString(length:number) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


getRol(){
  return of(Rol)
}


getProvincias(){
  return of(provincias)
}

getCiudades(provincia:string):Observable<string[]>{
  if (provincia === "Mendoza") {
    return of (ciudades1)
  } else {
    if (provincia === "Buenos Aires") {
      return of(ciudades2)
    } else {
      if (provincia === "Cordoba") {
        return of(ciudades3)
      } else {
        if (provincia === "San Luis") {
          return of(ciudades4)
        } else {
          return of([])
        }}}}}

//lista de alumnos-----

datos$(){
  this.cargando.cargando(true)
  // return of(listaAlumnos).pipe(delay(2000),finalize(()=>this.cargando.cargando(false)))
  return this.httpClient.get<UsuarioModelo[]>(`${environment.apiURL}/users`).
  pipe(delay(2000),
  finalize(()=>this.cargando.cargando(false)),
  catchError((error)=>{this.alerta.errorHttp('Error al cargar datos');return of (error)}))
}

datos2$(){
  this.cargando.cargando(true)
  // return of(listaAlumnos).pipe(delay(500),finalize(()=>this.cargando.cargando(false)))
  return this.httpClient.get<UsuarioModelo[]>(`${environment.apiURL}/users`).
  pipe(delay(500),
  finalize(()=>this.cargando.cargando(false)),
  catchError((error)=>{this.alerta.errorHttp('Error al cargar datos');return of (error)}))
}


paginador(page:number,perPage = 5){
  this.cargando.cargando(true)
  return this.httpClient.get<Paginador<UsuarioModelo>>(`${environment.apiURL}/users?_page=${page}&_per_page=${perPage}`).pipe(
    delay(2000),
    finalize(()=>this.cargando.cargando(false))
  )
}


cargarAlumno(alumno:UsuarioModelo){
  // listaAlumnos = [...listaAlumnos,{...alumno,Id:listaAlumnos.length + 1}]
  // return this.datos$()
  return this.httpClient.post<UsuarioModelo>(`${environment.apiURL}/users`, {...alumno,token:this.generateString(15)}).
  pipe(mergeMap(()=>this.datos2$()))
  
}


editarAlumno(id:number,alumno:UsuarioModelo){
  // listaAlumnos = listaAlumnos.map((el)=>el.id == id ? {...el,...alumno} : el)
  // return this.datos$()
  return this.httpClient.put<UsuarioModelo>(`${environment.apiURL}/users/${id}`,alumno).
  pipe(mergeMap(()=>this.datos2$()))
}

borrar(id:number){
  // listaAlumnos = listaAlumnos.filter((el)=> el.id != id)
  // return this.datos2$()
  return this.httpClient.delete(`${environment.apiURL}/users/${id}`).pipe(mergeMap(()=>this.datos2$()))
 }


 getById(id:string):Observable<UsuarioModelo[]>{
  return this.httpClient.get<UsuarioModelo[]>(`${environment.apiURL}/users/${id}`);
 }

// borrarAlumno(idalumno:number){
//   listaAlumnos = listaAlumnos.filter((res) => res.Id !== idalumno)
//   return this.datos2$()
// }

// getAlumnoById(id:number | string){
//   return of(listaAlumnos.find((val)=> val.Id == id)).pipe(delay(1000))
// }



getAlumnos():Observable<UsuarioModelo[]>{
  return this.httpClient.get<UsuarioModelo[]>(`${environment.apiURL}/users?Rol=User`)
}


}
