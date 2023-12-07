import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  constructor(private authSvc: AuthService) { }
  isLoggedIn: boolean = false
  ngDoCheck() {
    this.authSvc.isLoggedIn$.subscribe(res => this.isLoggedIn = res)
  }
  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe(res => this.isLoggedIn = res)
  }
  logOut() {
    this.authSvc.logOut()
  }
}
