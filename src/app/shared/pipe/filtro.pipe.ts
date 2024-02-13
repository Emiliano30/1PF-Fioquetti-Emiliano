import { Pipe, PipeTransform } from '@angular/core';
export interface filtro{
  Nombre:string
}
@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: filtro[], arg: string): filtro[] {
    let resultado:filtro[] = []
    for(let valor of value){
      if(valor.Nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultado = [...resultado,valor]
      }
    }
    return resultado;
  }

}
