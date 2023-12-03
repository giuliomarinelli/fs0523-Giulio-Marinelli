
import { Error404Component } from './pages/error-404/error-404.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { NavComponent } from './components/nav/nav.component';
import { TaskComponent } from './components/task/task.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { TodoHomeComponent } from './pages/todo-home/todo-home.component';
import { AddIconComponent } from './components/add-icon/add-icon.component';
import { EditIconComponent } from './components/edit-icon/edit-icon.component';
import { DeleteIconComponent } from './components/delete-icon/delete-icon.component';
import { CompleteIconComponent } from './components/complete-icon/complete-icon.component';
import { SaveIconComponent } from './components/save-icon/save-icon.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BtnLoaderComponent } from './components/btn-loader/btn-loader.component';
import { RedoIconComponent } from './components/redo-icon/redo-icon.component';
import { CancelIconComponent } from './components/cancel-icon/cancel-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpReadmeComponent } from './pages/help-readme/help-readme.component';
import { HelpComponent } from './components/help/help.component';


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
    BtnLoaderComponent,
    RedoIconComponent,
    CancelIconComponent,
    HeaderComponent,
    FooterComponent,
    HelpReadmeComponent,
    HelpComponent
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
