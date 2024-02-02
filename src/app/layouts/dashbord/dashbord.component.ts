import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {
  showFiller = false;
  constructor(private logoutService:AuthService){}
  logout(){
    this.logoutService.logout()
  }
}
