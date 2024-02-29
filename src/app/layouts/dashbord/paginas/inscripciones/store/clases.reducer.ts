import { createFeature, createReducer, on } from '@ngrx/store';
import { ClasesActions } from './clases.actions';
import { ClasesModel } from '../model/inscripciones.model';
import { CursoModel } from '../../cursos/model';
import { UsuarioModelo } from '../../alumnos2/model/index';

export const clasesFeatureKey = 'clases';

export interface State {
  clases:ClasesModel[],
  alumnos:UsuarioModelo[],
  cursos:CursoModel[],
  loading:boolean,
  loadingAlumnos:boolean,
  error:unknown
}

export const initialState: State = {
  clases:[],
  alumnos:[],
  cursos:[],
  loading:false,
  loadingAlumnos:false,
  error:null
};

export const reducer = createReducer(
  initialState,
  on(ClasesActions.loadClasess, (state) =>({...state, loading:true })),
  on(ClasesActions.loadClasessSuccess, (state, action) => ({...state, loading:false, clases:action.data})),
  on(ClasesActions.loadClasessFailure, (state, action) => ({...state, loading:false, error:action.error})),
  on(ClasesActions.loadAlumnos,(state)=>({...state,loadingAlumnos:true})),
  on(ClasesActions.loadAlumnosSuccess,(state,action)=>({...state,loading:false,alumnos:action.data})),
  on(ClasesActions.loadCursos,(state)=>({...state,loadingAlumnos:true})),
  on(ClasesActions.loadCursosSuccess,(state,action)=>({...state,loadingAlumnos:false,cursos:action.data})),
);

export const clasesFeature = createFeature({
  name: clasesFeatureKey,
  reducer,
});

