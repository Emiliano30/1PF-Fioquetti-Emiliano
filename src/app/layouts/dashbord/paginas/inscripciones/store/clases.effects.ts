import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ClasesActions } from './clases.actions';

import { InscripcionesService } from '../inscripciones.service';
import { ListaService } from '../../../../../core/services/listaAlumnos/lista.service';
import { ListacursoService } from '../../../../../core/services/cursos/listacurso.service';


@Injectable()
export class ClasesEffects {

  loadClasess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ClasesActions.loadClasess),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.clasesServices.getClases().pipe(
          map(data => ClasesActions.loadClasessSuccess({ data })),
          catchError(error => of(ClasesActions.loadClasessFailure({ error }))))
      )
    );
  });

  
  loadAlumnos$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(ClasesActions.loadAlumnos),
      concatMap(()=>this.usuarioService.getAlumnos().pipe(
        map((resp)=>ClasesActions.loadAlumnosSuccess({data:resp})),
        catchError(error => of(ClasesActions.loadAlumnosFailure({error})))
        ))
    )
  })


   
  loadCurso$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(ClasesActions.loadCursos),
      concatMap(()=>this.cursoService.cargarCursos().pipe(
        map((resp)=>ClasesActions.loadCursosSuccess({data:resp})),
        catchError(error => of(ClasesActions.loadCursosFailure({error})))
        ))
    )
  })

crearIns$ = createEffect(()=>{
  return this.actions$.pipe(
    ofType(ClasesActions.crearInscripcion),
    concatMap((action)=>{return this.clasesServices.crearIns(action.data).pipe(
      map((resp)=>ClasesActions.crearInscripcionSuccess({data:resp})),
      catchError((error)=> of(ClasesActions.crearInscripcionFailure({error})))
    )})
  )
})

crearInsSuccess = createEffect(()=>{
  return this.actions$.pipe(
    ofType(ClasesActions.crearInscripcionSuccess),
    map(()=>ClasesActions.loadClasess())
  )
})

editarIns =createEffect(()=>{
  return this.actions$.pipe(
    ofType(ClasesActions.actualizar),
    concatMap((action)=>{return this.clasesServices.editar(action.id, action.data).pipe(
      map((resp)=>ClasesActions.actualizarSuccess({data:resp})),
      catchError((error)=>of(ClasesActions.actualizarFailure({error})))
    )})
  )
})

editarInsSuccess = createEffect(()=>{
  return this.actions$.pipe(
    ofType(ClasesActions.actualizarSuccess),
    map(()=>ClasesActions.loadClasess())
  )
})


eliminar$ = createEffect(()=>{
  return this.actions$.pipe(
    ofType(ClasesActions.eliminar),
    concatMap((action)=>{return this.clasesServices.eliminar(action.data).pipe(
      map((resp)=>ClasesActions.eliminarSuccess({data:resp})),
      catchError((error)=>of(ClasesActions.eliminarFailure({error})))
    )})
  )
})

eliminarSuccess$ = createEffect(()=>{
  return this.actions$.pipe(
    ofType(ClasesActions.eliminarSuccess),
    map(()=>ClasesActions.loadClasess())
  )
})





  constructor(
    private actions$: Actions, 
    private clasesServices:InscripcionesService,
    private usuarioService:ListaService,
    private cursoService:ListacursoService,
    ) {}
}
