import { createReducer, on } from '@ngrx/store';
import { UsuarioModelo } from '../../../layouts/dashbord/paginas/alumnos2/model/index';
import { loginAction } from '../action';


export const featureName = 'login'

export interface usuario {
    usuario: UsuarioModelo | null
}

const estadoInicial:usuario = {
usuario:null
}

export const usuarioReducer = createReducer(estadoInicial,
    on(loginAction.setAuthUser,(estado,action)=>{
        return{
            ...estado,
            usuario:action.usuario
        }
    }),
    on(loginAction.logout,(estado)=>estadoInicial))