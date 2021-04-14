import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

/**
 * Pager interface define paging values of the PageComponent
 */
export interface Pager {
  /**
   * Total records
   */
  totalItems?: number;
  /**
   * Current page index
   */
  pageNumber?: number;
  /**
   * Total records size per page
   */
  pageSize?: number;
  /**
   * First page number of the displayed pages
   */
  startPage?: number;
  /**
   * Last page number of the displayed pages
   */
  endPage?: number;
  /**
   * The first record's index of the displaying data of the total records
   * For example, total 100 records exit and the pager show records between 44-54
   * startIndex is 44, endIndex is 54
   */
  startIndex?: number;
  /**
   * The last record's index of the displaying data of the total records
   * For example, total 100 records exit and the pager show records between 44-54
   * startIndex is 44, endIndex is 54
   */
  endIndex?: number;
  /**
   * Page list array
   */
  pages?: number[];
  /**
   * Total page number
   */
  totalPages?: number;
}

/**
 * Paging component display paging for other components. You can adopt paging any component using this component.
 *
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-paging
 *   (pageNumberChange)="pagingModule.onPageChangeHandler($event)"
 *   [pageSize]="5"
 *   [totalCount]="140"
 * >
 * </logo-paging>
 * ```
 */
@Component({
  selector: 'logo-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit, OnChanges {
  /**
   * Pager interface holds the paging values of the PageComponent
   */
  public pager: Pager = {};
  /**
   * Total page will be displaying
   */
  public totalPages: number;
  /**
   * This property specifies the maximum number of the page will be shown at the bar.
   */
  @Input() threshold: number = 10;
  /**
   * Total records
   */
  @Input() totalCount: number;
  /**
   * Records per page
   */
  @Input() pageSize = 10;
  /**
   * Currently displaying page index
   */
  @Input() pageNumber = 1;
  /**
   * Record found text
   */
  @Input() recordsFound = 'record(s) found';
  /**
   * `pageNumberChange` event trigger, when page changed this will be emitted.
   */
  @Output() pageNumberChange: EventEmitter<Pager> = new EventEmitter<Pager>();
  /**
   * `pageSizeChange event trigger, when page size changed will be emitted.
   */
  @Output() pageSizeChange: EventEmitter<Pager> = new EventEmitter<Pager>();
  /**
   * event will be triggered when ngOnInit completed
   */
  @Output() onLoad: EventEmitter<Pager> = new EventEmitter<Pager>();

  @HostBinding('class.app-paging') classes = true;

  ngOnInit() {
    this.onLoad.emit(this.pager);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = Math.ceil(this.totalCount / this.pageSize);
    this.pager = this.getPager(this.totalCount, this.pageNumber, this.pageSize, this.threshold);
  }

  /**
   * Set current page the given parameter
   * @param page
   */
  setPage(page: number) {
    console.log(page + '1')
    if (page >= 1 && page <= this.pager.totalPages) {
      console.log(page + '2');
      this.pager = this.getPager(this.totalCount, page, this.pageSize, this.threshold);
      this.pageNumberChange.emit(this.pager);
    }
  }

  setPageSize(pageSize?: number) {
    this.pageSize = pageSize ? pageSize : this.pageSize;
    this.pager = this.getPager(this.totalCount, this.pageNumber, this.pageSize, this.threshold);
    this.totalPages = this.pager.totalPages;
    this.pageSizeChange.emit(this.pager);
  }

  getPager(totalItems: number, pageNumber = 1, pageSize = 10, threshold = 10): Pager {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);
    const halfPages = Math.ceil(threshold / 2);
    let startPage: number;
    let endPage: number;
    if (totalPages <= threshold) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (pageNumber <= halfPages + 1) {
        startPage = 1;
        endPage = threshold;
      } else if (pageNumber + halfPages >= totalPages) {
        startPage = totalPages - threshold + 1;
        endPage = totalPages;
      } else {
        startPage = pageNumber - halfPages;
        endPage = pageNumber + halfPages - 1;
      }
    }
    // calculate start and end item indexes
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    const pages = this.range(startPage, endPage + 1 - startPage);
    // return object with all pager properties required by the view
    return {
      totalItems,
      pageNumber,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }

  range(start = 0, count = 0): number[] {
    return [...Array(count)].map((u, i) => start + i);
  }
}
