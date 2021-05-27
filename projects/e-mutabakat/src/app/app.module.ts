import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LoadingModule } from '@logo-software/loading';
import { HeaderModule } from '@logo-software/header';
import { LinksModule } from '@logo-software/links';
import { IdmModule } from '@logo-software/idm';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@cloud/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingModule,
    HeaderModule,
    IdmModule.forRoot(environment.IDM.CLIENT_ID, {RETURN_URI: environment.IDM.CONFIG.RETURN_URI}),
    LinksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
