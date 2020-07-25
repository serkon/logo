import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsRoutingModule } from './ms-routing.module';
import { MsComponent } from './ms.component';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';

@NgModule({
  declarations: [MsComponent],
  imports: [
    CommonModule,
    MsRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [MsComponent],
})
export class MsModule {
}
