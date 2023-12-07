import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAppRoutingModule } from './my-app-routing.module';
import { MyAppComponent } from './my-app.component';


@NgModule({
  declarations: [
    MyAppComponent
  ],
  imports: [
    CommonModule,
    MyAppRoutingModule
  ]
})
export class MyAppModule { }
