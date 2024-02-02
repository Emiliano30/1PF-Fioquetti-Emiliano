import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login.component";


const rutas:Routes = [
    {
        path:'',
        component:LoginComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})

export class LoginRouterModule{}