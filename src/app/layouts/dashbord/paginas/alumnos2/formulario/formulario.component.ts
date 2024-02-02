import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaService } from '../../../../../core/listaAlumnos/lista.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnoModelo } from '../model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  miFormulario:FormGroup
  opciones:string[] = []
  localidades:string[]=[]
  item: string="";


  constructor(
    private fb:FormBuilder,
    private provincias:ListaService,
    private dialogoRef:MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA)private editingCurso?:AlumnoModelo
    ){

    this.miFormulario = this.fb.group({
      Nombre:this.fb.control('',[Validators.required, Validators.maxLength(10),Validators.minLength(4)]),
      Apellido:this.fb.control('',[Validators.required, Validators.maxLength(10),Validators.minLength(4)]),
      Email:this.fb.control('',[Validators.required, Validators.email]),
      Provincia: this.fb.control('',Validators.required),
      Ciudad:this.fb.control('',Validators.required),
      Nota:this.fb.control('',[Validators.required,Validators.min(1),Validators.max(10)])
    })
  

    this.provincias.getProvincias().subscribe({
      next:(val)=>this.opciones = val
    })
  
    if(this.editingCurso){
      this.miFormulario.patchValue(this.editingCurso)
    }
  
  }
  



    elegir2(item:string) {

      this.provincias.getCiudades(item).subscribe({
        next:(val) => this.localidades = val
      })}


  onSubmit(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
    }else{
      this.dialogoRef.close(this.miFormulario.value)
    }
    
    
  }
}
