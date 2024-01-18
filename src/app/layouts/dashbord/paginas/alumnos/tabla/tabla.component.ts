import { Component, Input } from '@angular/core';
import { AlumnoMolde } from '../model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
@Input()
dataSource:AlumnoMolde[] = []
displayedColumns: string[] = ['Id','Nombre Completo','Email','Provincia','Ciudad','Nota'];
criterio:string=""
}
