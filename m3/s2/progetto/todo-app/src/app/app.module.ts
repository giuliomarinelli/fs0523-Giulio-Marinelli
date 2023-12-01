
import { Error404Component } from './pages/error-404/error-404.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { NavComponent } from './nav/nav.component';
import { TaskComponent } from './components/task/task.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { TodoHomeComponent } from './pages/todo-home/todo-home.component';
import { AddIconComponent } from './add-icon/add-icon.component';
import { EditIconComponent } from './edit-icon/edit-icon.component';
import { DeleteIconComponent } from './delete-icon/delete-icon.component';
import { CompleteIconComponent } from './complete-icon/complete-icon.component';
import { SaveIconComponent } from './save-icon/save-icon.component';
import { LoaderComponent } from './loader/loader.component';
import { LineLoaderComponent } from './line-loader/line-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    NavComponent,
    TaskComponent,
    FormComponent,
    Error404Component,
    TodoHomeComponent,
    AddIconComponent,
    EditIconComponent,
    DeleteIconComponent,
    CompleteIconComponent,
    SaveIconComponent,
    LoaderComponent,
    LineLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
