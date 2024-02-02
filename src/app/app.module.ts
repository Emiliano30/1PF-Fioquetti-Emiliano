import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordModule } from './layouts/dashbord/dashbord.module';
import { LoginModule } from './layouts/login/login.module';
import { ErrorModule } from './layouts/error/error.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashbordModule,
    LoginModule,
    ErrorModule,
    MatProgressSpinnerModule,
    MatNativeDateModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
