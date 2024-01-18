import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { FiltroPipe } from './filtro.pipe';
import { TitulosDirective } from './titulos.directive';
import { SoloNumeroDirective } from './solo-numero.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    FiltroPipe,
    TitulosDirective,
    SoloNumeroDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[FullNamePipe, FiltroPipe, TitulosDirective,SoloNumeroDirective]
})
export class SharedModule { }
