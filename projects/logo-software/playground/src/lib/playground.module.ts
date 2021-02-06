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
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground.component';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {
}
