import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-content-logged',
  templateUrl: './header-content-logged.component.html',
  styleUrl: './header-content-logged.component.scss'
})
export class HeaderContentLoggedComponent {

  constructor(private authSvc: AuthService, private router: Router) { }

  logOut() {
    this.authSvc.logOut()
  }

}
