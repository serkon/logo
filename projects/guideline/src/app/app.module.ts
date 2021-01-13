/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownComponent, MarkdownModule } from '@logo-software/markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DrawerModule } from '@logo-software/drawer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MarkdownModule, RouterModule, DrawerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
