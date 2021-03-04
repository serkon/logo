import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '@logo-software/card';

import { ProductItemComponent } from '@cloud/app/components/product-item/product-item.component';
import { LinksModule } from '@logo-software/links';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [
    CommonModule,
    CardModule,
    LinksModule,
  ],
  exports: [ProductItemComponent],
})
export class ProductItemModule {
}
