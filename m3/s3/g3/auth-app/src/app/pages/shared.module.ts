import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home/home-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { RegisterRoutingModule } from './register/register-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule,
    ProfileRoutingModule
  ],
  declarations: [
    TopNavComponent,
    FooterComponent,
    LoaderComponent
  ],
  exports: [
    TopNavComponent,
    FooterComponent,
    LoaderComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
