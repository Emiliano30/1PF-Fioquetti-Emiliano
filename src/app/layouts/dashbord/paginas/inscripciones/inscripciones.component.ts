import { Component } from '@angular/core';
import { InscripcionesService } from './inscripciones.service';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClasesActions } from './store/clases.actions';
import { ClasesModel } from './model/inscripciones.model';
import { clasesSelect } from './store/clases.selectors';

import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from './form-modal/form-modal.component';

import Swal from 'sweetalert2';
import { NotificacionService } from '../../../../core/services/notificacion/notificacion.service';
import { UsuarioModelo } from '../alumnos2/model';
import { selectUsuario } from '../../../../core/store/selector';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss',
})
export class InscripcionesComponent{
 
  displayedColumns: string[] = ['Nombre', 'Curso', 'Fecha','Nota','Acciones'];
  dataSource$:Observable<ClasesModel[]>
  mostrar$:Observable<UsuarioModelo | null>
  constructor(
    private clasesServices:InscripcionesService, 
    private store:Store,
    private matDialogo:MatDialog,
    private noti:NotificacionService
   
    ){
    this.dataSource$ = this.store.select(clasesSelect)
    this.store.dispatch(ClasesActions.loadClasess())
    this.mostrar$ = this.store.select(selectUsuario)
  }


eliminar(id:string | number){
  Swal.fire({
    title: "Atención!",
    text: "Desea eliminar esta Inscripcion?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado!",
        text: "Inscripcion eliminada",
        icon: "success"
      });

     this.store.dispatch(ClasesActions.eliminar({data:id}))
    }

  });
  
}




agregar(){
  this.matDialogo.open(FormModalComponent).afterClosed().subscribe({
    next:(resp)=>{
      if(resp){this.store.dispatch(ClasesActions.crearInscripcion({data:resp}))}}
  })
}




editar(ins:ClasesModel){
 this.matDialogo.open(FormModalComponent,{data:ins}).afterClosed().subscribe({
  next:(resp)=>{
    if(resp){
      this.store.dispatch(ClasesActions.actualizar({id:ins.id,data:resp}))
    }
  },
  complete:()=>this.noti.actualizadoExito()
 })
}

mostrar(dato:string){
  if(dato == 'Admin'){
    return true
  }else{
    return false
  }
 }


}
