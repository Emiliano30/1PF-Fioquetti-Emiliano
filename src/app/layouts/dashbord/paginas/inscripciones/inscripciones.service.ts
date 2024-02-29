import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ClasesModel, CrearIns } from './model/inscripciones.model';
import { delay, finalize, tap } from 'rxjs';

import { SpinnerService } from '../../../../core/services/spinner/spinner.service';




@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  constructor(
    private httpClient:HttpClient,
    private cargando:SpinnerService
  ) { 
  }

getClases(){
  this.cargando.cargando(true)
  return this.httpClient.get<ClasesModel[]>(`${environment.apiURL}/Clases?_embed=user&_embed=course`).pipe(
    delay(2000),
    finalize(()=>this.cargando.cargando(false))
  )
}

crearIns(data:CrearIns){
  return this.httpClient.post<ClasesModel>(`${environment.apiURL}/Clases`,data)
}

eliminar(id:string|number){
  return this.httpClient.delete<ClasesModel>(`${environment.apiURL}/Clases/${id}`)
}  


editar(id:string|number, data:CrearIns){
  return this.httpClient.put<ClasesModel[]>(`${environment.apiURL}/Clases/${id}`,data)
}
  


}
