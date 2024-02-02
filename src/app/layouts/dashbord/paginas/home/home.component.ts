import { Component } from '@angular/core';
import { SpinnerService } from '../../../../core/spinner/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

constructor(private cargando:SpinnerService){
this.cargarHome()
}

cargarHome(){
  this.cargando.cargando(true)
  setTimeout(() => {
    this.cargando.cargando(false)
  }, 2000);
}

}
