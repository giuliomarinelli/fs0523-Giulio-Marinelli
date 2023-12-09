import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGmeteoComponent } from './my-gmeteo.component';

const routes: Routes = [{ path: '', component: MyGmeteoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyGmeteoRoutingModule { }
