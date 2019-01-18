import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppHeader } from "./header/header.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
