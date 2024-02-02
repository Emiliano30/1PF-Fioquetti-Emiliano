import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validadores'
})
export class ValidadoresPipe implements PipeTransform {

  transform(error?:ValidationErrors | null, ...args: unknown[]): unknown {
  

    if(!!error){
      
      let mensajes = []
      if(error['required']) mensajes.push('Este campo es requerido') ;
      if(error['email'])mensajes.push('Email no es valido');
      if(error['maxlength']) mensajes.push(`No se permiten mas de  caracteres ${error['maxlength']?.requiredLength} `);
      if(error['minlength']) mensajes.push(`No se permiten menos de  caracteres ${error['minlength']?.requiredLength} `);
      if(error['min']) mensajes.push(`No se permite menos de  ${error['min']?.min} `);
      if(error['max']) mensajes.push(`No se permite más de  ${error['max']?.max} `);

      return mensajes.join('. ') + '.'
    }
    
 return null
}
}
