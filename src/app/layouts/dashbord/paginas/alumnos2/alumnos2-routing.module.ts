import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Alumnos2Component } from "./alumnos2.component";

const rutas:Routes=[
    {
        path:'',
        component:Alumnos2Component
    }
]

@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})

export class Alumnos2RouterModule{}