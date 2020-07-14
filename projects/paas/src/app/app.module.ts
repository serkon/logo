import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursorModule } from '@logo-software/cursor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CursorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
