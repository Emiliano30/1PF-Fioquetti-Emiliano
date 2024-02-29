import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ClasesModel, CrearIns } from '../model/inscripciones.model';
import { UsuarioModelo } from '../../alumnos2/model';
import { CursoModel } from '../../cursos/model';
import { usuario } from '../../../../../core/store/reducer';

export const ClasesActions = createActionGroup({
  source: 'Clases',
  events: {
    'Load Clasess': emptyProps(),
    'Load Clasess Success': props<{ data:ClasesModel[] }>(),
    'Load Clasess Failure': props<{ error: unknown }>(),
    'Load Alumnos': emptyProps(),
    'Load Alumnos Success': props<{ data:UsuarioModelo[] }>(),
    'Load Alumnos Failure': props<{ error: unknown }>(),
    'Load Cursos': emptyProps(),
    'Load Cursos Success': props<{ data:CursoModel[] }>(),
    'Load Cursos Failure': props<{ error: unknown }>(),
    'Crear Inscripcion': props<{data:CrearIns}>(),
    'Crear Inscripcion Success': props<{ data:ClasesModel }>(),
    'Crear Inscripcion Failure': props<{ error: unknown }>(),
    'Actualizar': props<{id:string|number ,data:ClasesModel}>(),
    'Actualizar Success': props<{ data:ClasesModel[]}>(),
    'Actualizar Failure': props<{ error: unknown }>(),
    'eliminar': props<{data:string | number}>(),
    'eliminar Success': props<{ data:ClasesModel}>(),
    'eliminar Failure': props<{ error: unknown }>(),
  }
});
