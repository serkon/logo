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

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { GetstartedComponent } from './getstarted/getstarted.component';

@NgModule({
  declarations: [DocsComponent, GetstartedComponent],
  imports: [CommonModule, DocsRoutingModule],
  exports: [DocsComponent, GetstartedComponent],
})
export class DocsModule {
}
