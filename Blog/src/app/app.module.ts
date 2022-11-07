import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostboardComponent } from './components/postboard/postboard.component';
import { PostformComponent } from './components/postform/postform.component';

@NgModule({
  declarations: [
    AppComponent,
    PostboardComponent,
    PostformComponent
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
