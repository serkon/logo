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
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from '@logo-software/markdown';
import { DrawerModule } from '@logo-software/drawer';
import { LinksModule } from '@logo-software/links';
import { HeaderModule } from '@logo-software/header';
import { TreeModule } from '@logo-software/tree';
import { ToastModule, ToastService } from '@logo-software/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsService } from './docs/docs.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TreeModule,
    MarkdownModule,
    DrawerModule,
    LinksModule,
    HeaderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ToastModule,
  ],
  providers: [DocsService, AngularFireModule, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
