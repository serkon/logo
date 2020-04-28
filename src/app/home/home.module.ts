/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { CoreModule } from '../../../projects/logo-software/core/src/lib/core.module';
import { NgdThemeModule } from '../@theme/theme.module';

import { NgdHomeRoutingModule } from './home-routing.module';
import { NgdHomeComponent } from './home.component';


@NgModule({
  imports: [
    NgdHomeRoutingModule,
    NgdThemeModule,
    CoreModule.forRoot(),
  ],
  declarations: [
    NgdHomeComponent,
  ],
})
export class NgdHomeModule {
}
