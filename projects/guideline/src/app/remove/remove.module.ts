import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveRoutingModule } from './remove-routing.module';
import { RemoveComponent } from './remove.component';


@NgModule({
  declarations: [RemoveComponent],
  imports: [
    CommonModule,
    RemoveRoutingModule,
  ],
  exports: [RemoveComponent],
})
export class RemoveModule { }
