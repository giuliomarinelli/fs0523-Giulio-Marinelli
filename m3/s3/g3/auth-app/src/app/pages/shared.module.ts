import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home/home-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { RegisterRoutingModule } from './register/register-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from '../components/user-form/user-form.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    TopNavComponent,
    FooterComponent,
    LoaderComponent,
    UserFormComponent
  ],
  exports: [
    TopNavComponent,
    FooterComponent,
    LoaderComponent,
    UserFormComponent,
    CommonModule
  ]
})
export class SharedModule { }
