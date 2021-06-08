import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from '@logo-software/header';
import { ComboboxModule } from '@logo-software/combobox';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ComboboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
