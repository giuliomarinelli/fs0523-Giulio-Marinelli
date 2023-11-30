import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CustomComponent } from './custom/custom.component';
import { UpperCasePipe } from './upper-case.pipe';
import { EmphasisDirective } from './emphasis.directive';
import { PostComponent } from './pages/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    HeaderComponent,
    MenuComponent,
    CustomComponent,
    UpperCasePipe,
    EmphasisDirective,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
