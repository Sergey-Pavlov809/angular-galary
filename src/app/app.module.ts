import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainImgComponent } from './main-img/main-img.component';
import { PrevuesComponent } from './prevues/prevues.component';

@NgModule({
  declarations: [
    AppComponent,
    MainImgComponent,
    PrevuesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
