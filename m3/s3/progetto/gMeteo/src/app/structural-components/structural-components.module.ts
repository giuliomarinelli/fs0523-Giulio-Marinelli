import { AutocompleteModule } from './../autocomplete/autocomplete.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderContentLoggedComponent } from './header-content-logged/header-content-logged.component';
import { HeaderContentNoLoggedComponent } from './header-content-no-logged/header-content-no-logged.component';
import { FooterComponent } from './footer/footer.component';
import { FooterContentNoLoggedComponent } from './footer-content-no-logged/footer-content-no-logged.component';
import { FooterContentLoggedComponent } from './footer-content-logged/footer-content-logged.component';
import { LoginAsPageComponent } from './login-as-page/login-as-page.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AuthModule } from '../auth/auth.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderContentLoggedComponent,
    HeaderContentNoLoggedComponent,
    FooterComponent,
    FooterContentNoLoggedComponent,
    FooterContentLoggedComponent,
    LoginAsPageComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    AuthModule,
    NzTypographyModule,
    RouterModule,
    AutocompleteModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginAsPageComponent
  ]
})
export class StructuralComponentsModule { }
