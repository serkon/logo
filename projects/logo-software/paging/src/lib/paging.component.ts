import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

/**
 * Given parameters outside of the component
 */
export interface Paging {
  status?: boolean | null;
  pageSize: number | null;
  pageNumber: number | null;
  totalCount: number | undefined;
  totalPages: number | undefined;
}

export interface Pager {
  totalItems?: number;
  pageNumber?: number;
  pageSize?: number;
  startPage?: number;
  endPage?: number;
  startIndex?: number;
  endIndex?: number;
  pages?: number[];
  totalPages?: number;
}

@Component({
  selector: 'logo-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnChanges {
  @Input() totalCount: number;
  @Input() pageSize = 10;
  @Input() pageNumber = 1;
  @HostBinding('class.app-paging') classes = true;
  @Output() pageNumberChange: EventEmitter<Pager> = new EventEmitter<Pager>();
  @Output() pageSizeChange: EventEmitter<Pager> = new EventEmitter<Pager>();
  public pager: Pager = {};
  public totalPages: number;

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = Math.ceil(this.totalCount / this.pageSize);
    this.pager = this.getPager(this.totalCount, this.pageNumber, this.pageSize);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pager = this.getPager(this.totalCount, page, this.pageSize);
      this.pageNumberChange.emit(this.pager);
    }
  }

  setPageSize() {
    this.pager = this.getPager(this.totalCount, this.pageNumber, this.pageSize);
    this.pageSizeChange.emit(this.pager);
  }

  getPager(totalItems: number, pageNumber = 1, pageSize = 10): Pager {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);
    const threshold = 10;
    let startPage: number, endPage: number;
    if (totalPages <= threshold) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (pageNumber <= 6) {
        startPage = 1;
        endPage = threshold;
      } else if (pageNumber + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = pageNumber - 5;
        endPage = pageNumber + 4;
      }
    }
    // calculate start and end item indexes
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    const pages = this.range(startPage, endPage + 1 - startPage);
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      pageNumber: pageNumber,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  range(start = 0, count = 0): Array<number> {
    return [...Array(count)].map((u, i) => start + i);
  }
}
