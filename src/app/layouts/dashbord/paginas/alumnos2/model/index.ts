export interface UsuarioModelo{
    id:number ,
    Nombre:string,
    Apellido:string,
    Email:string,
    Provincia:string,
    Ciudad:string,
    Nota:number,
    Rol:string,
    Contraseña:string | number,
    token:string
}