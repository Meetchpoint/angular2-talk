import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularTalkComponent } from './angular-talk/angular-talk.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularTalkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
