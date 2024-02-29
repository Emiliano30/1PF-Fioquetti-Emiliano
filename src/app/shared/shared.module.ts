import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipe/full-name.pipe';
import { FiltroPipe } from './pipe/filtro.pipe';
import { TitulosDirective } from './directiva/titulos.directive';
import { SoloNumeroDirective } from './directiva/solo-numero.directive';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { ValidadoresPipe } from './pipe/validadores.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

import {animate, state, style, transition, trigger} from '@angular/animations';



@NgModule({
  declarations: [
    FullNamePipe,
    FiltroPipe,
    TitulosDirective,
    SoloNumeroDirective,
    ValidadoresPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValidadoresPipe,
    FullNamePipe, 
    FiltroPipe,
     
    TitulosDirective,
    SoloNumeroDirective,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule
  
  ]
})
export class SharedModule { }
