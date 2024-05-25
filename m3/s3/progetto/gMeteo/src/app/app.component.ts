import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { AuthService } from './services/auth.service';
import { iAuthData } from './Models/auth/i-auth-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private langSvC: LanguageService, private authSvc: AuthService, private authGard: AuthService) { }

  isLoggedIn: boolean = false
  footerBottom: string = ''

  ngOnInit() {
    if (!localStorage.getItem('authData')) {
      const authData: iAuthData = {
        user: {
          email: "marco.azzurri@libero.it",
          password: "$2a$10$Wyjvy2qpdJ7bcY7z21VsEeDaQSEdGNtl6jku1gmkaSNW3o3yOnh1i",
          name: "Marco",
          surname: "Azzurri",
          gender: "M",
          phoneNumber: "+39 123 123 1234",
          dateOfBirth: "2023-12-01",
          "id": 20,
          favourites: []
        },
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoyMzMzMzMzMzMzfQ.dgK_K8vwgcq4aXLI-xj9B4RD6i_6D0Mt-EQraVFvJz4",
      }
      localStorage.setItem('authData', JSON.stringify(authData))
    }
    this.authSvc.isLoggedIn$.subscribe(res => {
      this.isLoggedIn = true
      this.footerBottom = this.isLoggedIn ? 'footer-bottom-logged' : 'footer-bottom-no-logged'
    })

  }
}
