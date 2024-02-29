import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClasesActions } from '../store/clases.actions';
import { Observable } from 'rxjs';
import { UsuarioModelo } from '../../alumnos2/model';
import { clasesAlumnoSelect, clasesCursoSelect } from '../store/clases.selectors';
import { CursoModel } from '../../cursos/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClasesModel } from '../model/inscripciones.model';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss'
})
export class FormModalComponent {
alumnos$:Observable<UsuarioModelo[]>
cursos$:Observable<CursoModel[]>
miFormulario:FormGroup

constructor(
  private store:Store,
  private fb:FormBuilder,
  private matDialogRef:MatDialogRef<FormModalComponent>,
  @Inject(MAT_DIALOG_DATA)private editingClases?:ClasesModel
  ){

  

this.miFormulario = this.fb.group({
  userId:this.fb.control('',[Validators.required]),
  courseId:this.fb.control('',[Validators.required])
})    

this.store.dispatch(ClasesActions.loadAlumnos())
this.store.dispatch(ClasesActions.loadCursos())

this.alumnos$ = this.store.select(clasesAlumnoSelect)
this.cursos$ = this.store.select(clasesCursoSelect)


if(this.editingClases){
  this.miFormulario.patchValue(this.editingClases)
}

}


onSubmit(){
  if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched()
  }else{
    // this.store.dispatch(ClasesActions.crearInscripcion({data:this.miFormulario.value}));
    this.matDialogRef.close(this.miFormulario.value)
  }
}
}