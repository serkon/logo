import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsSampleRoutingModule } from './icons-sample-routing.module';
import { IconsShowcaseComponent } from './icons-showcase/icons-showcase.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IconsShowcaseComponent],
  imports: [CommonModule, IconsSampleRoutingModule, FormsModule],
  exports: [IconsShowcaseComponent],
})
export class IconsSampleModule {
}
