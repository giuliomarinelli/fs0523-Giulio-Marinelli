import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGmeteoRoutingModule } from './my-gmeteo-routing.module';
import { MyGmeteoComponent } from './my-gmeteo.component';



@NgModule({
  declarations: [
    MyGmeteoComponent
  ],
  imports: [
    CommonModule,
    MyGmeteoRoutingModule
  ]
})
export class MyGmeteoModule { }
