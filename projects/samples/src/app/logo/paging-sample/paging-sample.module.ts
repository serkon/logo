import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingShowcaseComponent } from './paging-showcase/paging-showcase.component';
import { PagingModule } from '@logo-software/paging';

@NgModule({
  declarations: [PagingShowcaseComponent],
  imports: [CommonModule, PagingModule],
})
export class PagingSampleModule {
}
