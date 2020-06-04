/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgdThemeModule } from './@theme/theme.module';
import { NgdAppComponent } from './app.component';
import { routes } from './app.routes';
import { structure } from '../structure';
import { DOCS, STRUCTURE } from './app.options';
import {
  NbCardModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbMenuModule,
  NbProgressBarModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
} from '@nebular/theme';
import { RootModule } from './root/root.module';

const docs = require('../output.json');

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NbSidebarModule,
    NbCardModule,
    NbLayoutModule,
    NbTabsetModule,
    NbCheckboxModule,
    NbProgressBarModule,
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot(),
    NgdThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    RootModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  declarations: [NgdAppComponent],
  providers: [
    Title,
    {provide: STRUCTURE, useValue: structure},
    {provide: DOCS, useValue: docs},
  ],
  bootstrap: [NgdAppComponent],
})
export class AppModule {
}
