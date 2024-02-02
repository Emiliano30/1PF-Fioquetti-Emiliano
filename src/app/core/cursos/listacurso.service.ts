import { Injectable } from '@angular/core';
import { CursoModel } from '../../layouts/dashbord/paginas/cursos/model';
import { delay, finalize, of } from 'rxjs';
import { SpinnerService } from '../spinner/spinner.service';


let cursos:CursoModel[] = [
  {
    Id:1,
    nombreCurso:"Informática",
    Fecha:new Date()
  },
  {
    Id:2,
    nombreCurso:"Matemática",
    Fecha:new Date()
  },
  {
    Id:3,
    nombreCurso:"Ingles Tecnico",
    Fecha:new Date()
  }

]



@Injectable({
  providedIn: 'root'
})
export class ListacursoService {

  constructor(private cargando:SpinnerService) {}

 getCursos(){
  this.cargando.cargando(true)
  return of(cursos).pipe(delay(2000),finalize(()=>this.cargando.cargando(false)))
 }

 getCursos2(){
  this.cargando.cargando(true)
  return of(cursos).pipe(delay(500),finalize(()=>this.cargando.cargando(false)))
 }


 borrarCurso(id:number){
  cursos = cursos.filter((el)=> el.Id != id)
  return this.getCursos2()
 }


crearCurso(curso:CursoModel){
  cursos = [...cursos,{...curso,Id:cursos.length + 1}]
  return this.getCursos()
}

editarCurso(id:number,curso:CursoModel){
  cursos = cursos.map((el)=>el.Id === id ? {...el,...curso} : el)
  return this.getCursos()
}


}
