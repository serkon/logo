import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from '@logo-software/header';
import { LinksModule } from '@logo-software/links';
import { IdmModule } from '@logo-software/idm';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
   BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    LinksModule,
    IdmModule.forRoot(environment.IDM.CLIENT_ID, {RETURN_URI: environment.IDM.CONFIG.RETURN_URI}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
