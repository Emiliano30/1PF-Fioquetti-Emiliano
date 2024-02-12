import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/login/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const ruta = inject(Router)
  const admin = inject(AuthService)
  return admin.usuarios?.Rol === 'Admin'? true : ruta.createUrlTree(['dashbord','home'])
};
