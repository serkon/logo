import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule, ToastService } from '@logo-software/toast';
import { DrawerModule } from '@logo-software/drawer';
import { TreeModule } from '@logo-software/tree';
import { LoadingModule } from '@logo-software/loading';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ToastModule, DrawerModule, TreeModule, LoadingModule],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
