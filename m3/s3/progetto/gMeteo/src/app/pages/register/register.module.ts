import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { StructuralComponentsModule } from '../../structural-components/structural-components.module';
import { AuthModule } from '../../auth/auth.module';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    StructuralComponentsModule,
    AuthModule,
    NzCardModule
  ]
})
export class RegisterModule { }
