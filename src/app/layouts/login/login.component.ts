import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  miFormulario:FormGroup
  ocultar = false
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private auth:AuthService
    ){
      this.miFormulario = this.fb.group({
        email:this.fb.control('emi@gmail.com',[Validators.required,Validators.email]),
        Contraseña:this.fb.control('emiliano',[Validators.required, Validators.maxLength(8),Validators.minLength(5)])
      })
    }


  onSubmit(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched
    }else{
      this.auth.login(this.miFormulario.value)
    }
  }

  mostrar(){
    this.ocultar = true
  }
}
