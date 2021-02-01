/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from '@logo-software/markdown';
import { DrawerModule, DrawerService } from '@logo-software/drawer';
import { LinksModule } from '@logo-software/links';
import { HeaderModule } from '@logo-software/header';
import { TreeModule } from '@logo-software/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsService } from './docs/docs.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MarkdownModule, RouterModule, DrawerModule, LinksModule, HeaderModule, TreeModule],
  providers: [DocsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
