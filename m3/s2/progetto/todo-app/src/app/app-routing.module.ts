import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { TodoHomeComponent } from './pages/todo-home/todo-home.component';

const routes: Routes = [
  {
    path: '',
    component: TodoHomeComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
