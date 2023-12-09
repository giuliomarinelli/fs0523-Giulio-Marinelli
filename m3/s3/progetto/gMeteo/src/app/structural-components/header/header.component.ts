import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authSvc: AuthService) { }

  isLoggedIn: boolean = false

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe(res => this.isLoggedIn = res)
  }

}
