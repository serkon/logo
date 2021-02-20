import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from '@logo-software/header';
import { LinksModule } from '@logo-software/links';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LinksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
