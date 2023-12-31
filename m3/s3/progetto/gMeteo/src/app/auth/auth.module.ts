import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal'

@NgModule({
  declarations: [
    LoginComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NzModalModule
  ],
  exports: [
    LoginComponent,
    UserFormComponent
  ]
})
export class AuthModule { }
