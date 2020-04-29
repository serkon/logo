import { Component } from '@angular/core';

@Component({
  selector: 'logo-paging-showcase',
  templateUrl: './paging-showcase.component.html',
  styleUrls: ['./paging-showcase.component.scss'],
})
export class PagingShowcaseComponent {
  pagingModule = {onPageChangeHandler: ($event) => console.log('Event: ', $event)}; // Paging Module
}
