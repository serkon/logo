import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsSampleRoutingModule } from './icons-sample-routing.module';
import { IconsShowcaseComponent } from './icons-showcase.component';
import { IconsService } from '@logo-software/icons/src/lib/icons.service';

@NgModule({
  declarations: [IconsShowcaseComponent],
  imports: [CommonModule, IconsSampleRoutingModule],
  providers: [IconsService],
  exports: [IconsShowcaseComponent],
})
export class IconsSampleModule {
}
