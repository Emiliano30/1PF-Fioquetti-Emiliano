import { Pipe, PipeTransform } from '@angular/core';

export interface User{
  Nombre:string,
  Apellido:string
}

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): string {
    return value.Nombre.toUpperCase()+ " " + value.Apellido.toUpperCase();
  }

}
