import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardModule } from '@logo-software/card';
import { LinksModule } from '@logo-software/links';

import { ProductItemComponent } from '@cloud/app/components/product-item/product-item.component';
import { SlugModule } from '@cloud/app/pipes/slug.module';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [
    CommonModule,
    CardModule,
    LinksModule,
    RouterModule,
    SlugModule,
  ],
  exports: [ProductItemComponent],
})
export class ProductItemModule {
}
