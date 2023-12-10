import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {

    this.authSvc.user$.subscribe(data => console.log(data))

  }

}
