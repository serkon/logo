import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '@logo-software/links';

import { CloudFooterComponent } from '@cloud/app/components/cloud-footer/cloud-footer.component';

@NgModule({
  declarations: [CloudFooterComponent],
  imports: [
    CommonModule,
    LinksModule,
  ],
  exports: [CloudFooterComponent],
})
export class CloudFooterModule {
}
