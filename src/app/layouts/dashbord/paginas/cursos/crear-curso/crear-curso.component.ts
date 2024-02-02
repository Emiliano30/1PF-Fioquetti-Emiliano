import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursoModel } from '../model';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrl: './crear-curso.component.scss'
})
export class CrearCursoComponent {
  miFormulario:FormGroup

  constructor(
    private fb:FormBuilder,
    private dialogoRef:MatDialogRef<CrearCursoComponent>,
    @Inject(MAT_DIALOG_DATA)private editingCurso?: CursoModel
    ){
    this.miFormulario = this.fb.group({
      nombreCurso:this.fb.control('',[Validators.required]),
      Fecha:this.fb.control('', [Validators.required])
    })

    if(this.editingCurso){
      this.miFormulario.patchValue(this.editingCurso)
    }

  }

onSubmit(){
  if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched()
  }else{
    this.dialogoRef.close(this.miFormulario.value)
}
  }


}
