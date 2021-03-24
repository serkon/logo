import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursorModule } from '@logo-software/cursor';
import { HeaderModule } from '@logo-software/header';
import { LinksModule } from '@logo-software/links';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CursorModule, HeaderModule, LinksModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
}
