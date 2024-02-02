import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

const rutas:Routes=[
    {
        path:'',
        component:HomeComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})
export class HomeRoutingModule {}