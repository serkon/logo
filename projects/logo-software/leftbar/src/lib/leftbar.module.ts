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
import { HttpClientModule } from '@angular/common/http';

import { LeftbarComponent } from './leftbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LeftbarComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule],
  exports: [LeftbarComponent],
})
export class LeftbarModule {
}
