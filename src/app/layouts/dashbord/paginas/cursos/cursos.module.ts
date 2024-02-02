import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';


@NgModule({
  declarations: [
    CursosComponent,
    CrearCursoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
