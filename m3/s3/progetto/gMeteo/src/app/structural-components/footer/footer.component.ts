import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private authSvc: AuthService) { }

  isLoggedIn: boolean = false

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe(res => this.isLoggedIn = res)
  }
}
