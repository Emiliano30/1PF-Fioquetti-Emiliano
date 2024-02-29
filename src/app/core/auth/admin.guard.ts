import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/login/auth.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectUsuario, selectUsuarioFeature } from '../store/selector';

export const adminGuard: CanActivateFn = (route, state) => {
  const ruta = inject(Router)
  const admin = inject(AuthService)
  const store = inject(Store)
  // return admin.usuarios?.Rol === 'Admin'? true : ruta.createUrlTree(['dashbord','home'])
  return store.select(selectUsuario).pipe(
    map((res)=>{
      return res?.Rol === 'Admin' ? true : ruta.createUrlTree(['dashbord','home'])
    }))
};
