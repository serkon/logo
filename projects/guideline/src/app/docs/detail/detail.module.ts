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
import { MarkdownModule } from '@logo-software/markdown';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { SpacingComponent } from './spacing/spacing.component';
import { PlaygroundModule } from '@logo-software/playground';

@NgModule({
  declarations: [DetailComponent, SpacingComponent],
  imports: [CommonModule, DetailRoutingModule, MarkdownModule, PlaygroundModule],
  exports: [DetailComponent, SpacingComponent],
})
export class DetailModule {
}
