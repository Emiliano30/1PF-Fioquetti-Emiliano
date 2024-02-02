import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';

import { SharedModule } from '../../shared/shared.module';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { HomeModule } from './paginas/home/home.module';
import { HomeComponent } from './paginas/home/home.component';
import {MatMenuModule} from '@angular/material/menu';

import { Alumnos2Component } from './paginas/alumnos2/alumnos2.component';
import { Alumnos2Module } from './paginas/alumnos2/alumnos2.module';




@NgModule({
  declarations: [
    DashbordComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    
    SharedModule,
    MatListModule,
    HomeModule,
    MatMenuModule,
    Alumnos2Module,
    RouterModule.forChild([
    {
      path:'home',
      loadChildren:()=>import('./paginas/home/home.module').then((m)=>m.HomeModule)
    },
    {
      path:'alumnos',
      loadChildren:()=>import('./paginas/alumnos2/alumnos2.module').then((m)=>m.Alumnos2Module)
    },
    {
      path:'cursos',
      loadChildren: ()=>import('./paginas/cursos/cursos.module').then((m)=>m.CursosModule)
    },
    {
      path:'**',
      redirectTo:'home'
    }
  ]),

  ],
  exports:[DashbordComponent]
})
export class DashbordModule { }
