import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './layouts/dashbord/dashbord.component';
import { LoginComponent } from './layouts/login/login.component';
import { ErrorComponent } from './layouts/error/error.component';
import { authGuard } from './core/auth/auth.guard';



const routes: Routes = [
{
  path:'dashbord',
  canActivate:[authGuard],
  component:DashbordComponent,
  loadChildren:()=>import('./layouts/dashbord/dashbord.module').then((m)=>m.DashbordModule)
},
{
  path:'login',
  loadChildren:()=>import('./layouts/login/login.module').then((m)=>m.LoginModule)
},
{
  path:'404',
  component:ErrorComponent
},
{
  path:'**',
  redirectTo: 'login'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
