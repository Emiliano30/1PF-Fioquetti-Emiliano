import { Component } from '@angular/core';
import { AlumnoMolde } from './model';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {

  // displayedColumns: string[] = ['Nombre','Apellido','Email','Provincia','Ciudad','Nota'];
  dataSource:AlumnoMolde[] = []

  // [{
  //   Nombre:"",
  //   Apellido:"",
  //   Email:"",
  //   Provincia:"",
  //   Ciudad:"",
  //   Nota:0
  // },
  
agregar(ev:AlumnoMolde):void{
this.dataSource = [...this.dataSource,{...ev,Id:this.dataSource.length + 1}]}

}
