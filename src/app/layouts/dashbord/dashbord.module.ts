import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { AlumnosModule } from './paginas/alumnos/alumnos.module';
import { ClasesComponent } from './paginas/clases/clases.component';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DashbordComponent,
    ClasesComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AlumnosModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[DashbordComponent]
})
export class DashbordModule { }
