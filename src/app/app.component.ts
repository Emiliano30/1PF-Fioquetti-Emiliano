import { Component } from '@angular/core';
import { SpinnerService } from './core/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fioquetti-emiliano';
  loading:boolean=false

  
  constructor(private cargando:SpinnerService){
    this.cargando.spinner$.subscribe({
      next:(val) => {setTimeout(() => {
        this.loading = val
      }, );}})}
}
