import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from '@logo-software/markdown';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import { IconsSampleModule } from '../../../../playground/src/app/logo/icons-sample/icons-sample.module';

@NgModule({
  declarations: [IconsComponent],
  imports: [CommonModule, IconsRoutingModule, IconsSampleModule, MarkdownModule],
})
export class IconsModule {
}
