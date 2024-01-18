import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  

@Output() enviarEvent = new EventEmitter()

miFormulario:FormGroup
opciones:string[] = ["Mendoza","Buenos Aires","Cordoba","San Luis"]
ciudades1:string[] = ["Maipú","Godoy Cruz","Lujan","Las Heras"]
ciudades2:string[] = ['Merlo','Moreno','Morón','Quilmes','Pilar','Tigre']
ciudades3:string[] = ['Río Cuarto','Villa Carlos Paz','Villa María','San Francisco','Jesús María','Cosquín']
ciudades4:string[] = ['Villa Mercedes','Villa de Merlo','Juana Koslay','La Punta',]
localidades:string[]=[]
item: string="";




constructor(private fb:FormBuilder){
  this.miFormulario = this.fb.group({
    Nombre:this.fb.control('',Validators.required),
    Apellido:this.fb.control('',Validators.required),
    Email:this.fb.control('',[Validators.required, Validators.email]),
    Provincia: this.fb.control('',Validators.required),
    Ciudad:this.fb.control('',Validators.required),
    Nota:this.fb.control('',[Validators.required,Validators.min(1),Validators.max(10)])
  })


 
}



elegir2(item:string) {
  if (item === "Mendoza") {
    this.localidades = this.ciudades1
  } else {
    if (item === "Buenos Aires") {
      this.localidades = this.ciudades2
    } else {
      if (item === "Cordoba") {
        this.localidades = this.ciudades3
      } else {
        if (item === "San Luis") {
          this.localidades = this.ciudades4
        } 
      }
    }
    
  }
}



onSubmit(){
  if (this.miFormulario.invalid) {
    this.miFormulario.markAllAsTouched()
  } else {
     this.enviarEvent.emit(this.miFormulario.value)
     this.miFormulario.reset()
  }

}

}
