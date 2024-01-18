import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './layouts/dashbord/paginas/alumnos/alumnos.component';
import { ClasesComponent } from './layouts/dashbord/paginas/clases/clases.component';

const routes: Routes = [
 {path:'',redirectTo:'/alumno', pathMatch:'full'},
 {path: 'alumno', component: AlumnosComponent},
 {path:'clases', component: ClasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
