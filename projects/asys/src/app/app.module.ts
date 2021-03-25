import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from '@logo-software/card';
import { LinksModule } from '@logo-software/links';
import { TabsModule } from '@logo-software/tabs';
import { SampleComponent } from './sample/sample.component';
import { TimerModule } from '@logo-software/timer';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    LinksModule,
    CardModule,
    TabsModule,
    LinksModule,
    TimerModule,
    TimerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SampleComponent],
})
export class AppModule {
}
