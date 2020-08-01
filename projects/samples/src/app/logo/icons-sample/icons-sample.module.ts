import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsSampleRoutingModule } from './icons-sample-routing.module';
import { IconsShowcaseComponent } from './icons-showcase.component';
import { IconsService } from '@logo-software/icons/src/lib/icons.service';
import { IconsModule } from '@logo-software/icons';

@NgModule({
  declarations: [IconsShowcaseComponent],
  imports: [CommonModule, IconsSampleRoutingModule, IconsModule],
  providers: [IconsService],
  exports: [IconsShowcaseComponent],
})
export class IconsSampleModule {
}
