import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistratiComponent } from './pages/registrati/registrati.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: RegistratiComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
