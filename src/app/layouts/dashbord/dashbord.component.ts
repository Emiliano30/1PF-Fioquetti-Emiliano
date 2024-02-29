import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { UsuarioModelo } from './paginas/alumnos2/model';
import { Store } from '@ngrx/store';
import { selectUsuario } from '../../core/store/selector';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {
  showFiller = false;
  usuario$:Observable<UsuarioModelo | null>


  constructor(private logoutService:AuthService, private store:Store){
    this.usuario$ = store.select(selectUsuario)
  }
  logout(){
    this.logoutService.logout()
  }
}
