import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToastModule, ToastService } from '@logo-software/toast';

import { IconsSampleRoutingModule } from './icons-sample-routing.module';
import { IconsShowcaseComponent } from './icons-showcase/icons-showcase.component';

@NgModule({
  declarations: [IconsShowcaseComponent],
  imports: [CommonModule, IconsSampleRoutingModule, FormsModule, ToastModule],
  exports: [IconsShowcaseComponent],
  providers: [ToastService],
})
export class IconsSampleModule {
}
