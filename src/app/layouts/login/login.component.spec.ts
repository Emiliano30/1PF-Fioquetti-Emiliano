import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component"
import { MockProvider} from "ng-mocks";
import { AuthService } from "./auth.service";
import { SharedModule } from '../../shared/shared.module';
import { Validators } from "@angular/forms";


describe('Pruebas de LoginComponent',()=>{
    let component:LoginComponent;

    beforeEach(()=>{

        TestBed.configureTestingModule({
            declarations:[LoginComponent],
            imports:[SharedModule],
            providers:[
                MockProvider(AuthService)
            ],
        })

        component = TestBed.createComponent(LoginComponent).componentInstance
    })

it('Login debe inicializarse',()=>{

    expect(component).toBeTruthy()
});


it('Que el campo de Email y Contraseña tengan validador',()=>{
    expect(component.miFormulario.get('email')?.hasValidator(Validators.required)).toBeTrue();
    expect(component.miFormulario.get('email')?.hasValidator(Validators.email)).toBeTrue();
    expect(component.miFormulario.get('Contraseña')?.hasValidator(Validators.required)).toBeTrue()
});

it('Si el formulario es invalido y se hace click a onSumbit se marquen los campos como touched',()=>{
    component.miFormulario.patchValue({
        email:"",
        Contraseña:""
    })
    expect(component.miFormulario.invalid).toBeTrue()

    const spyOnMarkAllAsTouched = spyOn(component.miFormulario,'markAllAsTouched')

    component.onSubmit()

    
    expect(spyOnMarkAllAsTouched).toHaveBeenCalled()
})

})