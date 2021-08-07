import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './myComponent/myComponent.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './homeComponent/home.component';
import { AboutComponent } from './aboutComponent/about.component';
import { NavComponent } from './navComponent/navComponent.component';
import { PostsService } from './posts.servise';
import { ErrorPageComponent } from './error-page/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}