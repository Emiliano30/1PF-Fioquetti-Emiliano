import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClases from './clases.reducer';


export const selectClasesState = createFeatureSelector<fromClases.State>(
  fromClases.clasesFeatureKey
);


export const clasesSelect = createSelector(selectClasesState,(state)=>state.clases)
export const clasesAlumnoSelect = createSelector(selectClasesState,(state)=>state.alumnos)
export const clasesCursoSelect = createSelector(selectClasesState,(state)=>state.cursos)
