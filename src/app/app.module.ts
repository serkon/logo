/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { IdmModule } from '@logo-software/idm';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../projects/playground/src/environments/environment';

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
    IdmModule.forRoot(environment.IDM.CLIENT_ID, {RETURN_URI: environment.IDM.CONFIG.RETURN_URI}),
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
