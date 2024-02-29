import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { EffectsModule } from '@ngrx/effects';
import { ClasesEffects } from './store/clases.effects';
import { StoreModule } from '@ngrx/store';
import { clasesFeature } from './store/clases.reducer';
import { SharedModule } from '../../../../shared/shared.module';
import { FormModalComponent } from './form-modal/form-modal.component';


@NgModule({
  declarations: [
    InscripcionesComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(clasesFeature),
    EffectsModule.forFeature([ClasesEffects])
  ]
})
export class InscripcionesModule { }
