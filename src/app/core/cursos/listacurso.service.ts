import { Injectable } from '@angular/core';
import { CursoModel } from '../../layouts/dashbord/paginas/cursos/model';
import { catchError, delay, finalize, of, mergeMap } from 'rxjs';
import { SpinnerService } from '../spinner/spinner.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NotificacionService } from '../notificacion/notificacion.service';


let cursos:CursoModel[] = [
  // {
  //   Id:1,
  //   nombreCurso:"Informática",
  //   Fecha:new Date()
  // },
  // {
  //   Id:2,
  //   nombreCurso:"Matemática",
  //   Fecha:new Date()
  // },
  // {
  //   Id:3,
  //   nombreCurso:"Ingles Tecnico",
  //   Fecha:new Date()
  // }

]



@Injectable({
  providedIn: 'root'
})
export class ListacursoService {

  constructor(
    private cargando:SpinnerService,
    private httpClient:HttpClient,
    private notificacion:NotificacionService) {}

 getCursos(){
  this.cargando.cargando(true)
  // return of(cursos).pipe(delay(2000),finalize(()=>this.cargando.cargando(false)))
  return this.httpClient.get<CursoModel[]>(`${environment.apiURL}/courses`).
  pipe(delay(2000),
  finalize(()=>this.cargando.cargando(false)),
  catchError((error)=>{this.notificacion.errorHttp('Error al cargar datos'); return of (error)}
  ))
 }

 getCursos2(){
  this.cargando.cargando(true)
  // return of(cursos).pipe(delay(500),finalize(()=>this.cargando.cargando(false)))
  return this.httpClient.get<CursoModel[]>(`${environment.apiURL}/courses`).
  pipe(delay(500),
  finalize(()=>this.cargando.cargando(false)),
  catchError((error)=>{this.notificacion.errorHttp('Error al cargar datos'); return of (error)}
  ))
 }


 borrarCurso(id:number){
  // cursos = cursos.filter((el)=> el.Id != id)
  // return this.getCursos2()
  return this.httpClient.delete(`${environment.apiURL}/courses/${id}`).pipe(mergeMap(()=>this.getCursos2()))
 }


crearCurso(curso:CursoModel){
  // cursos = [...cursos,{...curso,Id:cursos.length + 1}]
  // return this.getCursos()
  return this.httpClient.post<CursoModel>(`${environment.apiURL}/courses`,curso).
  pipe(mergeMap(()=>this.getCursos2()))
}

editarCurso(id:number,curso:CursoModel){
  // cursos = cursos.map((el)=>el.id === id ? {...el,...curso} : el)
  // return this.getCursos()
  return this.httpClient.put<CursoModel>(`${environment.apiURL}/courses/${id}`,curso).
  pipe(mergeMap(()=>this.getCursos2()))
}


}
