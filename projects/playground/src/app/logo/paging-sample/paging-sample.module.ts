import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingShowcaseComponent } from './paging-showcase/paging-showcase.component';
import { PagingModule } from '@logo-software/paging';
import { PagingSampleRoutingModule } from './paging-sample-routing.module';

@NgModule({
  declarations: [PagingShowcaseComponent],
  imports: [CommonModule, PagingModule, PagingSampleRoutingModule],
})
export class PagingSampleModule {
}
