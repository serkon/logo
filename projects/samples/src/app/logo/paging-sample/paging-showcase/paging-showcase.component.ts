import { Component } from '@angular/core';
import { Pager } from '@logo-software/paging';

@Component({
  selector: 'logo-paging-showcase',
  templateUrl: './paging-showcase.component.html',
  styleUrls: ['./paging-showcase.component.scss'],
})
export class PagingShowcaseComponent {
  pagingDetail;

  onPageChangeHandler($event: Pager) {
    this.pagingDetail = JSON.stringify($event);
  }
}
