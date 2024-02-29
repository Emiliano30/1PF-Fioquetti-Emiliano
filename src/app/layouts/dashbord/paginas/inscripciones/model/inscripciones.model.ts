import { UsuarioModelo } from "../../alumnos2/model";
import { CursoModel } from "../../cursos/model";

export interface ClasesModel {
    id: number|string,
    userId:number|string,
    courseId:number|string,
    user?:UsuarioModelo[],
    course?:CursoModel[] 
    
}

export interface CrearIns{
    userId:string|number|null,
    courseId:string|number|null
}