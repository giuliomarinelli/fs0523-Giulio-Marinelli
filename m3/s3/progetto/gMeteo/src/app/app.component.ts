import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { AuthService } from './services/auth.service';

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
    this.authSvc.isLoggedIn$.subscribe(res => {
      this.isLoggedIn = res
      this.footerBottom = this.isLoggedIn ? 'footer-bottom-logged' : 'footer-bottom-no-logged'
    })

  }
}
