import { TestBed } from "@angular/core/testing"
import { AuthService } from "./auth.service"
import{HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { UsuarioModelo } from "../dashbord/paginas/alumnos2/model";

describe('Pruebas de servicio de autenticacion', ()=>{

    let authService:AuthService
    let httpControl:HttpTestingController

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[AuthService],
            imports:[HttpClientTestingModule]
        })

    authService = TestBed.inject(AuthService);    
    httpControl = TestBed.inject(HttpTestingController)
    })



    it ('AuthService debe inicializarse',()=>{
        expect(authService).toBeTruthy()});



    it ('El Login debe establecer un usuario', ()=>{

        const usuarioFalso:UsuarioModelo[] = [{
            Nombre: "falso",
            Apellido: "mentira",
            Email: "falso@falso.com",
            Provincia: "Buenos Aires",
            Ciudad: "Pilar",
            Nota: 9,
            Rol: "User",
            Contraseña: "callefalsa",
            id: 555,
            token:"asd6234klfadd4567"
        }]

        authService.login({email: 'falso@falso.com',Contraseña:'callefalsa'}).subscribe({
            next:()=>{
                console.log(authService.usuarios)
                expect (authService.usuarios).toEqual(usuarioFalso[0])
            }
        });
        httpControl.expectOne({
            url:'http://localhost:3000/users?Email=falso@falso.com&Contraseña=callefalsa',
            method:'GET',
        }).flush(usuarioFalso)
    })
    
})