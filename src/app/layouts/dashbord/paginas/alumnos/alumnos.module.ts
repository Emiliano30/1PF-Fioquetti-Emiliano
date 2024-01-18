import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { FormComponent } from './form/form.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatTableModule} from '@angular/material/table';
import { MatSelectModule} from '@angular/material/select';
import { TablaComponent } from './tabla/tabla.component';
import { SharedModule } from '../../../../shared/shared.module';





@NgModule({
  declarations: [
    AlumnosComponent,
    FormComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    SharedModule
  ],
  exports:[AlumnosComponent],
  providers:[{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}]
})
export class AlumnosModule { }
