import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UsuarioModelo } from "../../../layouts/dashbord/paginas/alumnos2/model";


export const loginAction = createActionGroup({
    source:'Login',
    events:{
        'set auth user':props<{usuario:UsuarioModelo}>(),
        'logout':emptyProps()
    }
})