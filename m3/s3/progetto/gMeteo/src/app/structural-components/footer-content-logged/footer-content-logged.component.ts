import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer-content-logged',
  templateUrl: './footer-content-logged.component.html',
  styleUrl: './footer-content-logged.component.scss'
})
export class FooterContentLoggedComponent {

  constructor(private authSvc: AuthService) { }

  logOut() {
    this.authSvc.logOut()
  }
}
