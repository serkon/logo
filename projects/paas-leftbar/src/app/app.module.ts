import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LeftbarModule } from '@logo-software/leftbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeModule } from '@logo-software/tree';
import { ModalModule } from '@logo-software/modal';
import { ToastModule, ToastService } from '@logo-software/toast';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, LeftbarModule, TreeModule, ModalModule, ToastModule],
  bootstrap: [AppComponent],
  providers: [ToastService],
})
export class AppModule {
}
