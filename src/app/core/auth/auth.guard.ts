import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/login/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const ruta = inject(Router)
  const auth = inject(AuthService)
  // return !!auth.usuarios? true : ruta.createUrlTree(['login'])
  // console.log('hola')
  return auth.virificacion().pipe(
    map((auto)=> auto ? true : ruta.createUrlTree(['login'])))
  
};
