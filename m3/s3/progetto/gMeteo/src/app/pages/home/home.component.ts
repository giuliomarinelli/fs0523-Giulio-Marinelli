import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {

    this.authSvc.isLoggedIn$.subscribe(res => {
      if (res) this.router.navigate(['/my-gmeteo'])
    })

  }

}
