import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./error.component";

const rutas:Routes =[{
    path:'',
    component:ErrorComponent
}]

@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})

export class ErrorRouterModule{}