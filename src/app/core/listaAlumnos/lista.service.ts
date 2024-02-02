import { Injectable, Pipe } from '@angular/core';

import { Observable, delay, finalize, of } from 'rxjs';
import { NotificacionService } from '../notificacion/notificacion.service';
import { AlumnoModelo } from '../../layouts/dashbord/paginas/alumnos2/model';
import { SpinnerService } from '../spinner/spinner.service';

let provincias:string[]=["Mendoza","Buenos Aires","Cordoba","San Luis"]

const ciudades1:string[] = ["Maipú","Godoy Cruz","Lujan","Las Heras"]
const ciudades2:string[] = ['Merlo','Moreno','Morón','Quilmes','Pilar','Tigre']
const ciudades3:string[] = ['Río Cuarto','Villa Carlos Paz','Villa María','San Francisco','Jesús María','Cosquín']
const ciudades4:string[] = ['Villa Mercedes','Villa de Merlo','Juana Koslay','La Punta',]




let listaAlumnos:AlumnoModelo[] = [
  {
  Id:1,
  Nombre:"Martin",
  Apellido:"Martinez",
  Email:"mar@gmail.com",
  Provincia:"Mendoza",
  Ciudad:"Maipu",
  Nota:5
},
{Id:2,
Nombre:"Juana",
Apellido:"Rodriguez",
Email:"jua@gmail.com",
Provincia:"Buenos Aires",
Ciudad:"Moreno",
Nota:8},
]


@Injectable({
  providedIn: 'root'
})
export class ListaService {

constructor(
  private alerta:NotificacionService,
  private cargando:SpinnerService) {}




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
        }
      }
    }
    
  }
}

//lista de alumnos-----

datos$(){
  this.cargando.cargando(true)
  return of(listaAlumnos).pipe(delay(2000),finalize(()=>this.cargando.cargando(false)))
}

datos2$(){
  this.cargando.cargando(true)
  return of(listaAlumnos).pipe(delay(500),finalize(()=>this.cargando.cargando(false)))
}

cargarAlumno(alumno:AlumnoModelo){
  listaAlumnos = [...listaAlumnos,{...alumno,Id:listaAlumnos.length + 1}]
  return this.datos$()
  
}


editarAlumno(id:number,alumno:AlumnoModelo){
  listaAlumnos = listaAlumnos.map((el)=>el.Id === id ? {...el,...alumno} : el)
  return this.datos$()
}

borrar(id:number){
  listaAlumnos = listaAlumnos.filter((el)=> el.Id != id)
  return this.datos2$()
 }

// borrarAlumno(idalumno:number){
//   listaAlumnos = listaAlumnos.filter((res) => res.Id !== idalumno)
//   return this.datos2$()
// }

// getAlumnoById(id:number | string){
//   return of(listaAlumnos.find((val)=> val.Id == id)).pipe(delay(1000))
// }






}
