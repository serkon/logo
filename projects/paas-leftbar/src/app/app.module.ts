import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeftbarModule } from '@logo-software/leftbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
