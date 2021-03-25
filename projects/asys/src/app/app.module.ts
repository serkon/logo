import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardModule } from '@logo-software/card';
import { LinksModule } from '@logo-software/links';
import { TabsModule } from '@logo-software/tabs';
import { TimerModule } from '@logo-software/timer';

import { SampleComponent } from './sample/sample.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinksModule,
    CardModule,
    TabsModule,
    TimerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SampleComponent],
})
export class AppModule {
}
