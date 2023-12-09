import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }, { path: 'my-gmeteo', loadChildren: () => import('./pages/my-gmeteo/my-gmeteo.module').then(m => m.MyGmeteoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
