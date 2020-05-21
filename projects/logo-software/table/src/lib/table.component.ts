/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Pager } from '@logo-software/paging';
import { ExcelSettingType, ExcelTableColumn } from '@logo-software/excel';
import { Events } from './types/event.model';
import { ExpanderComponent } from './expander.component';
import { TableMeta } from './types/table.meta';
import { FilterType } from './types/filter.type';
import { TableHead } from './types/table.head';
import { TableUpdateDataType } from './types/table.update-data-type';
import { TableFilter } from './types/table.filter';
import { TableColumn } from './types/table.column';
import { TableAction } from './types/table.action';
import { TableSorting } from './types/table.sorting';
import { OrderPipe, Util } from '@logo-software/core';
import { TablePaging } from './types/table.paging';

export type VariablePathResolver = (row: any) => string;
export type VariableFunctionResolver = (row: any) => any;

export enum CRUD {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

/**
 * Creates data grid table with many features.
 *
 * Add below code to target component html page `app.component.html` file:
 *
 * <sub>**app.component.html**</sub>
 * ```hmtl
 * <logo-table
 * [columns]="tableDummyData.columns"
 * [rows]="tableDummyData.rows"
 * >
 * </logo-table>
 * ```
 *
 * @stacked-example(Table Showcase, logo/table-sample/table-showcase/table-showcase.component)
 */
@Component({
  selector: 'logo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements TableMeta<any>, OnInit, OnDestroy, OnChanges {
  public expanderStatus = [];
  @ContentChild('columns' || TemplateRef, {read: TemplateRef, static: true}) templateRef: any;
  @ContentChild('expander', {read: TemplateRef, static: true}) expanderTemplateRef: TemplateRef<any>;
  @ContentChild(ExpanderComponent, {static: true}) expanderComponent: ExpanderComponent;
  /**
   * Make table editable when it's the value set true
   */
  @Input() public editable = false;
  /**
   * Add new record area will be visible when it's the value set true
   */
  @Input() public create = false;
  /**
   * When reference property set to another Table reference it will connect to this table for drag,
   * drop or push for selected row to reference table
   */
  @Input() public reference: TableComponent;
  /**
   * It will show reference table add and remove data buttons when set true and reference table set
   */
  @Input() public refButtonStatus = true;
  /**
   * It defines the HTTP response data resource root path.
   * If the HTTP response data source path different then the response.data, `mapPath` set to the root resource path.
   * When the return response like the below example, wants to the show `id` and `name` properties on the table,
   * you must set the resource path to 'table.data.path'
   *
   * ```JSON
   * {
   *  table:
   *    {data:
   *      {path:
   *        [{id: 4, name: 'Serkan'}, {id: 5: name: 'Sarp'}]
   *      }
   *    }
   * }
   * ```
   */
  @Input() public mapPath: string = null;
  /**
   * The automatic property, calls the table `load()` method when initialized. The default value is true.
   */
  @Input() public automatic = true;
  /**
   * Activate multiple row selection, default is false
   */
  @Input() public multiSelect = false;
  /**
   * It set externally added table th columns. Reference [TableHead](/#/docs/logo-business-solutions/table-module#tablehead)
   */
  @Input() public heads: TableHead[] = [];
  /**
   * Refresh action button enable when it's the value set true. Default value is false.
   */
  @Input() public refresh = false;
  /**
   * Delete action button enable when it's the value set true. Default value is false.
   */
  @Input() public delete = true;
  /**
   * Paging status default true
   */
  @Input() public hasPaging = true;
  /**
   * Table filter status default true
   */
  @Input() public hasFilter = true;
  /**
   * Index is make visible index numbers of the table at the first column. The default value is false.
   */
  @Input() public index = false;
  /**
   * It sets index start number
   */
  @Input() public indexStart = 0;
  /**
   * Make table columns sortable, default value is false
   */
  @Input() public sort = true;
  /**
   * It sets table height
   */
  @Input() public height: string = null;
  /**
   * Service set table Http request url and request method.
   * If table set to server side it must be set.
   */
  @Input() public service: { url: string, method?: string } = {url: null, method: 'GET'};
  /**
   * It set excel exporting. More information please look [ExcelSettingType](/#/docs/modules/excel-module#excelsettingtype)
   */
  @Input() public excel: ExcelSettingType = {status: true};
  /**
   * It make table row draggable. Default value is false.
   */
  @Input() public draggable = false;
  /**
   * Event is *deprecated*, will be removed.
   */
  @Input() public events: Events = new Events();
  /**
   * Paas is custom property for use PaaS project
   */
  @Input() public paas = false;
  /**
   * This field define oDATA request identifier
   */
  @Input() public oDataIdentityField: string = null;
  /**
   * oDataStatus
   */
  @Input() oDataStatus = false;
  /**
   * Parent table row
   */
  @Input() parentRow: any = null;
  /**
   * Parent table row Index
   */
  @Input() parentIndex: number = null;

  /**
   * Record found text for translation
   */
  @Input() recordsFound = 'record(s) found';
  /**
   * If set true Checkbox will be visible
   */
  @Input() checkbox: boolean = true;
  /**
   * This method accepts parameters and return values for create HttpParams values. Using this data will be generated HttpParams.
   * ```JSON
   * http://...?paging={"pageNumber":1,"pageSize":5}&filter=[{"path":"zone.name","value":"çorum","filterType":"text"}]&sorting={"zone":{"name":"DESC"}}
   * ```
   * Parameters includes three type data.
   *  - Filters
   *  - Paging
   *  - Sorting
   *  For example:
   *  ```typescript
   *  parameters = {
   *    'paging': {'pageNumber': 1, 'pageSize': 5},
   *    'filter': [{'path': 'zone.name', 'value': 'Çorum', 'filterType': 'text'}],
   *    'sorting': {'zone': {'name': 'ASC'}},
   *  };
   *  ```
   *
   *  If anybody wants to change or reformat this code, it is possible to do using this method.
   * @param parameters
   */
  @Output() public onHttpParams: EventEmitter<any> = new EventEmitter<any>();
  /**
   * It changes HttpHeaders for HttpRequest
   */
  @Output() public onHttpHeaders: EventEmitter<any> = new EventEmitter<any>();
  /**
   * It will necessary if data wants to change by client before the set table rows. Triggered when http request was completed.
   * This event triggered only if server-side set to true.
   */
  @Output() public onHttpResponseModifier: EventEmitter<{ data: any, totalCount?: number, totalPages?: number }> = new EventEmitter<{ data: any, totalCount?: number, totalPages?: number }>();
  /**
   * Triggered when http response with error.
   */
  @Output() public onHttpError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();
  @Output() public onTrClicked: EventEmitter<{ row, event, index }> = new EventEmitter<{ row, event, index }>();
  @Output() public onTrDblClicked: EventEmitter<{ row, event, index }> = new EventEmitter<{ row, event, index }>();
  /**
   * When last row displayed as an html this event will be fired
   * This method will send rows and last row to the defined function
   * Example:
   * <lbs- table (completed)= onCompleted({rows: this.rows, row}) ...>
   */
  @Output() public onRenderCompleted: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Triggered when the data load completed. If server-side set true: Loaded triggered on http succeeded.
   * If server-side false it was triggered when rows imported on client-side.
   * <lbs-table (loaded)=onLoaded({rows: this.original, shows: this.showing});
   */
  @Output() public onHttpSucceed: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Triggered while content mode on and input value changed
   */
  @Output() public onUpdateChange: EventEmitter<TableUpdateDataType> = new EventEmitter<TableUpdateDataType>();
  /**
   * Triggered when input element focus has been lost
   */
  @Output() public onUpdateBlur: EventEmitter<TableUpdateDataType> = new EventEmitter<TableUpdateDataType>();
  /**
   * Triggered when input element focused
   */
  @Output() public onUpdateFocus: EventEmitter<TableUpdateDataType> = new EventEmitter<TableUpdateDataType>();
  /**
   * Triggered when input change accept button clicked
   */
  @Output() public onUpdateAccepted: EventEmitter<TableUpdateDataType> = new EventEmitter<TableUpdateDataType>();
  /**
   * Triggered when cancel button clicked
   */
  @Output() public onUpdateCancel: EventEmitter<TableUpdateDataType> = new EventEmitter<TableUpdateDataType>();
  /**
   * Triggered when new record accept button clicked. This will send to client UpdatingDataType.
   * It also contain clear method for if prefer to clear row's data after
   */
  @Output() public onCreateAccepted: EventEmitter<TableUpdateDataType> = new EventEmitter<TableUpdateDataType>();
  /**
   * Triggered when clicked delete table action button. It send to selected row as a parameter.
   */
  @Output() public onDeleteClicked: EventEmitter<any> = new EventEmitter<any>();
  /**
   * When row delete HttpRequest was succeed, this method emitted.
   */
  @Output() public onDeleteHttpSucceed: EventEmitter<HttpResponse<any>['body']> = new EventEmitter<HttpResponse<any>['body']>();
  /**
   * When row delete HttpRequest was error, this method emitted.
   */
  @Output() public onDeleteHttpError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();
  /**
   * When row information update HttpRequest succeed, this method triggered.
   */
  @Output() public onUpdateHttpSucceed: EventEmitter<HttpResponse<any>['body']> = new EventEmitter<HttpResponse<any>['body']>();
  /**
   * When row update HttpRequest was error, this method emitted.
   */
  @Output() public onUpdateHttpError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();
  /**
   * When new row information send then HttpRequest succeed, this method triggered.
   */
  @Output() public onCreateHttpSucceed: EventEmitter<HttpResponse<any>['body']> = new EventEmitter<HttpResponse<any>['body']>();
  /**
   * When new row information send then HttpRequest was error, this method emitted.
   */
  @Output() public onCreateHttpError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();
  /**
   * Newly added records on table
   */
  public creating: any = {};
  /**
   * Showing records on table
   */
  public showing: any[] | null = null;
  /**
   * Original records
   */
  public original: any[] | null = null;
  /**
   * Initial paging values. TablePaging object contains:
   *  - pageSize, (records per page)
   *  - pageNumber, (current page index number)
   *  - totalCount, (total records were found)
   *  - totalPages, (total pages were calculated by pageSize)
   */
  public paging: TablePaging = {
    pageSize: this.pageSize || 10,
    pageNumber: this.pageNumber || 1,
    totalCount: 0,
    totalPages: 0,
  };
  /**
   * Selected records
   */
  public list: any[] = [];
  /**
   * Initial sorting values
   */
  public sorting: { column: string | VariablePathResolver, descending: boolean, status: boolean } = {
    column: null,
    descending: false,
    status: this.sort,
  };
  /**
   * Filter variable
   */
  public filter: TableFilter<string>[] = [];
  /**
   * Interval set refreshing time of reload
   */
  public interval: { status: boolean, time: number } = {status: false, time: 1000};
  /**
   * Drag status contains `status` and `list` attribute
   */
  public drag: { start: boolean, list: any[] } = {start: false, list: []};
  public _this = this;
  private timeout: number;
  private variablePathFilter: TableFilter<VariablePathResolver>[] = [];
  private variableFunctionFilter: TableFilter<VariableFunctionResolver>[] = [];
  private filterDelay: number = null;
  private clickDelay: number = null;
  private createClearTimeout: number = null;
  private orderPipe = new OrderPipe();

  constructor(public elementRef: ElementRef, private api: HttpClient, private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {
  }

  private _rows: any[] = [];

  /**
   * The showing records
   */
  @Input()
  public get rows() {
    return this._rows;
  }

  public set rows(value) {
    this._rows = value;
  }

  private _pageNumber = 1;

  /**
   * Start page index if set 2 and pageSize set to 10, table will show between 10-19 records
   */
  @Input() get pageNumber() {
    return this._pageNumber;
  }

  set pageNumber(value: number) {
    this._pageNumber = value;
    this.paging.pageNumber = value;
  }

  public _pageSize = 10;

  /**
   * The number of records to be displayed per page
   */
  @Input() get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
    this.paging.pageSize = value;
  }

  private _serverSide = false; // table sorting side parameter

  /**
   * to set true, table will get data from REST service.
   */
  @Input()
  public get serverSide(): boolean {
    return this._serverSide;
  }

  public set serverSide(value: boolean) {
    this._serverSide = value;
  }

  private _actions: TableAction[] = [];

  /**
   * Table actions define table interaction from outside [TableAction](/#/docs/modules/table-module#tableaction)
   */
  @Input()
  public get actions(): TableAction[] {
    return this._actions;
  }

  public set actions(value: TableAction[]) {
    this._actions = value;
  }

  private _columns: TableColumn[] = [];

  /**
   * Table columns [TableColumn](/#/docs/modules/table-module#tablecolumn)
   */
  @Input() get columns(): TableColumn[] {
    return this._columns;
  }

  set columns(value: TableColumn[]) {
    const options = new TableColumn();
    this._columns = value.map(column => ({...options, ...column}));
    this.excel.columns = <ExcelTableColumn[]> value;
  }

  private _selected: any = null;

  get selected(): any {
    return this._selected;
  }

  /**
   * Currently selected row
   * @param value
   */
  set selected(value: any) {
    this.list.push(value);
    this._selected = value;
  }

  /**
   * When clicked outside of the table this will be triggered for clear cell focus
   */
  @HostListener('document:click') clickInside() {
    const status = event && this.elementRef.nativeElement.contains((event.target as HTMLElement).closest('table'));
    if (!status) {
      this.elementRef.nativeElement
        .querySelectorAll('.edit-focus')
        .forEach(item => {
          item.classList.remove('edit-focus');
        });
    }
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Object.keys(changes).forEach(item => this[item] = changes[item].currentValue);
    if (changes['rows']) {
      this.original = changes['rows'].currentValue;
      this.load();
    }
    // this.init();
  }

  trackByMethod(index: number, row: any): number {
    return index;
  }

  init() {
    // TODO this.loadingService.status(true, 'table init');
    this.sorting.status = this.sort;
    this.service.method = this.service.method || 'GET';
    this._columns = this._columns.map((item: TableColumn) => {
      item.filterType = item.filterType ? item.filterType : FilterType.TEXT;
      item.format = item.format ? item.format : '';
      return item;
    });
    if (this.automatic) {
      this.load();
    }
    if (this.interval.status) {
      this.reloadInTime();
    }
    this.setExcelOptions();
  }

  /**
   * Table refresher or load all data again
   */
  load() {
    (this.serverSide && !!this.service.url) ? this.serverSideLoading() : this.clientSideLoading();
  }

  ngOnDestroy() {
    if (this.interval.status) {
      this.reloadCancel();
    }
    this.reset();
    this.onRenderCompleted.unsubscribe();
  }

  setExcelOptions() {
    const options: ExcelSettingType = {
      status: !!this.excel.status,
      columns: this._columns as ExcelTableColumn[],
      name: !!this.excel.name ? this.excel.name : 'excel',
      data: this.rows,
      service: {
        url: this.service.url,
        method: this.service.method,
        body: {
          data: this.filter,
        },
      },
      complete: this.excel.complete,
      type: this.excel.type || 'xls',
    };
    this.excel = {...this.excel, ...options};
  }

  reloadInTime() {
    this.timeout = window.setInterval(() => {
      this.load();
    }, this.interval.time);
  }

  reloadCancel() {
    clearInterval(this.timeout);
  }

  htmlSetActionButtonClass(action: TableAction): string[] {
    const classes = [];
    if (action.className) {
      classes.push(action.className);
    }
    if (!!action.classFunction) {
      const className = action.classFunction(this._this);
      if (className) {
        classes.push(className);
      }
    }
    return classes;
  }

  htmlSetTdColspan(index) {
    return this.columns.length + this.heads.length + (index ? 1 : 0);
  }

  htmlSetTheadClass(column: TableColumn): string | boolean {
    const classes = [];
    if (column.className) {
      classes.push(column.className);
    }
    if (this.sort) {
      if (column.variablePath === this.sorting.column || column.sortingKey === this.sorting.column) {
        classes.push(`logo-arrow-${this.sorting.descending ? 'down' : 'up'}`);
      } else if (column.sortable) {
        classes.push(`sort`);
      }
    }
    return classes.join(' ');
  }

  htmlSetTdClass(row: any, column: TableColumn): string[] {
    const classes = [];
    if (column.className) {
      classes.push(column.className);
    }
    if (!!column.classFunction) {
      const className = column.classFunction(row);
      if (className) {
        classes.push(className);
      }
    }
    if (this.editable && column.editable && !this.isFunction(column.variablePath || column.variableFunction)) {
      classes.push('editable');
    }
    return classes;
  }

  htmlChangeSortingByColumn(column: TableColumn): void {
    if (column.sortable) {
      const sort: TableSorting = this.sorting;
      if (sort.column === column.variablePath || sort.column === column.sortingKey) {
        sort.descending = !sort.descending;
      } else {
        sort.column = column.sortingKey ? column.sortingKey : column.variablePath;
        sort.descending = true;
      }
      this.load();
    }
  }

  htmlOrderBy() {
    return (!this.serverSide && this.sort) ? this.sorting : false;
  }

  getColumnPath(row: any, column: TableColumn) {
    return (typeof (column.variablePath) === 'function') ? column.variablePath(row) : column.variablePath;
  }

  htmlGetRowPathValue(row: any, column: TableColumn) {
    return (column.variablePath) ? Util.getObjectPathValue(row, this.getColumnPath(row, column)) : (!!column.variableFunction) ? column.variableFunction(row) : null;
  }

  htmlSetRowPath(value, row, column) {
    Util.setObjectPathValue(row, this.getColumnPath(row, column), value);
  }

  htmlFilterAdd(column: TableColumn, inputElement) {
    window.clearTimeout(this.filterDelay);
    // column = Util.type(column.variableFunction) === 'Function' ? column.variableFunction(this.rows[0]) : column;
    this.filterGenerate(column, inputElement.value);
    this.filterDelay = window.setTimeout(() => {
      this.pageNumber = 1;
      this.load();
    }, 800);
  }

  htmlFilterType(column: TableColumn) {
    let type = null;
    if (['custom'].includes(column.filterType)) {
      type = 'text';
    } else if (['percent', 'range', 'currency'].includes(column.filterType)) {
      type = 'number';
    } else if (column.filterType === 'datetime') {
      type = 'datetime-local';
    } else {
      type = column.filterType;
    }
    return type;
  }

  filterGenerate(column, value) {
    const search = {path: column.variableFunction || column.variablePath, value: value, filterType: column.filterType};
    if (this.isFunction(column.variablePath)) {
      const index = this.variablePathFilter.findIndex(item => item.path === search.path);
      index >= 0 ? search.value.length <= 0 ? this.variablePathFilter.splice(index, 1) : Object.assign(this.variablePathFilter[index], search) : this.variablePathFilter.push(search);
    } else if (this.isFunction(column.variableFunction)) {
      const index = this.variableFunctionFilter.findIndex(item => item.path === search.path);
      index >= 0 ? search.value.length <= 0 ? this.variableFunctionFilter.splice(index, 1) : Object.assign(this.variableFunctionFilter[index], search) : this.variableFunctionFilter.push(search);
    } else {
      const index = this.filter.findIndex(item => item.path === search.path);
      index >= 0 ? search.value.length <= 0 ? this.filter.splice(index, 1) : Object.assign(this.filter[index], search) : this.filter.push(search);
    }
  }

  makeFilterToObject(filter: TableFilter<any>[], row?) {
    return filter.reduce((p, c, i) => ({...p, ...Util.makeObject(this.isFunction(c.path) ? c.path(row) : <string> c.path, c.value)}), {});
  }

  runPathFilter(filtered) {
    if (this.variablePathFilter.length > 0) {
      filtered = filtered.filter(row => {
        return Util.isContained(row, this.makeFilterToObject(this.variablePathFilter, row), false);
      });
    }
    if (this.variableFunctionFilter.length > 0) {
      filtered = filtered.filter(row => this.variableFunctionFilter.every((item, i) => {
        return Util.turkishToLower(String(item.path(row))).includes(Util.turkishToLower(item.value));
      }));
    }
    return filtered;
  }

  clientSideLoading() {
    this.original = JSON.parse(JSON.stringify(this.original || this.rows || []));
    this.showing = JSON.parse(JSON.stringify(this.rows));
    this.clientSideFilter();
    this.onHttpSucceed.emit({rows: this.original, shows: this.showing});
  }

  clientSideFilter() {
    const startIndex = (this.pageNumber - 1) * this.pageSize;
    const filter = this.makeFilterToObject(this.filter);
    Util.clearNullAndUndefined(filter, true);
    let filtered = JSON.parse(
      JSON.stringify(this.original && Util.findAllObjectInArray(this.original, filter, false)),
    );
    filtered = this.runPathFilter(this.orderPipe.transform(filtered, this.sorting));
    this.rows = filtered.slice(startIndex, startIndex + this.paging.pageSize);
    this.paging.totalCount = filtered.length;
    return this.rows;
  }

  serverSideLoading() {
    // TODO this.loadingService.status(true, `${this.service.url} - table start`);
    this.api.request(this.service.method, this.service.url, {
      params: this.manageQueryParams(),
      headers: this.generateHttpHeaders(),
    }).subscribe(
      (response: { data: any, totalCount?: number, totalPages?: number }) => this.onLoadSuccessHandler(response),
      (error: HttpErrorResponse) => this.onLoadErrorHandler(error),
    );
  }

  manageQueryParams(): HttpParams {
    let sorting = this.sorting.column ? Util.makeObject(<string> this.sorting.column, this.sorting.descending ? 'desc' : 'asc') : null;
    const filter: TableFilter<string>[] = this.filter.length > 0 ? this.filter : null;
    const paging = {pageNumber: this.pageNumber, pageSize: this.pageSize};
    const queryParameter: { sort?: string, q?: string, offset?: number, limit?: number, $orderby?: string, $skip?: number, $top?: number, $filter?: string } = {};
    const reformat = {
      sorting: () => {
        if (sorting) {
          sorting = Util.extractObjectAllValues(sorting);
          const sort = Object.keys(sorting).map(item => `${item} ${sorting[item]}`);
          if (!this.oDataStatus) {
            queryParameter.sort = sort.join(',');
          } else {
            queryParameter.$orderby = sort.join(',');
          }
        }
      },
      paging: () => {
        if (!this.oDataStatus) {
          queryParameter.limit = paging.pageSize;
          queryParameter.offset = this.paas ? (paging.pageNumber - 1) * paging.pageSize : paging.pageNumber;
        } else {
          queryParameter.$top = paging.pageSize;
          queryParameter.$skip = this.paas ? (paging.pageNumber - 1) * paging.pageSize : paging.pageNumber;
        }

      },
      filter: () => {
        const text = [];
        if (filter && this.oDataStatus) {
          filter.map(item => {
            if (item && item.value) {
              if (item['filterType'] === 'number') {
                text.push(`${item.path} eq ${item.value}`);
              } else if (item['filterType'] === 'date') {
                text.push(`${item.path} eq ${item.value}`);
              } else if (item['filterType'] === 'custom') {
                text.push(`startswith(${item.path}, '${item.value}') eq true`);
              } else {
                text.push(`startswith(${item.path}, '${item.value}') eq true`);
              }
            }
          });
        } else if (filter && this.paas) {
          filter.map(item => {
            if (item && item.value) {
              if (item['filterType'] === 'number') {
                text.push(`${item.path}=${item.value}`);
              } else if (item['filterType'] === 'date') {
                text.push(`${item.path}=${item.value}`);
              } else if (item['filterType'] === 'custom') {
                text.push(`${item.path} '${item.value}'`);
              } else {
                text.push(`${item.path} like '%${item.value}%'`);
              }
            }
          });
        } else {
          filter && filter.forEach(
            item => item.value && text.push(item.filterType === 'custom' ? `${item.path} '${item.value}'` : `${item.path}=${item.value}`),
          );
        }
        if (!this.oDataStatus) {
          queryParameter.q = this.paas ? text.join(' And ') : text.join('|');
        } else {
          queryParameter.$filter = text.join(' and ');
        }
      },
    };
    Object.keys(reformat).forEach((key) => {
      reformat[key]();
    });
    Util.clearNullAndUndefined(queryParameter, true);
    return this.generateHttpParams(queryParameter);
  }


  generateHttpHeaders(): HttpHeaders {
    const header = {};
    this.onHttpHeaders.emit(header);
    let headers: HttpHeaders = new HttpHeaders();
    Object.keys(header).forEach((key) => {
      headers = headers.append(key, header[key]);
    });
    return headers;
  }

  generateHttpParams(queryParameter?): HttpParams {
    queryParameter = queryParameter || {};
    this.onHttpParams.emit(queryParameter);
    let params = new HttpParams();
    Object.keys(queryParameter).forEach((key) => {
      params = params.append(key, queryParameter[key]);
    });
    return params;
  }

  htmlRendered(row?: any) {
    // TODO this.loadingService.status(false, `${this.service.url} - table complete - rows: ${row}`);
    this.onRenderCompleted.emit({rows: this.rows, row});
  }

  getSort() { // TODO: ileride this.sorting bir array olmali
    const sortList: any = {};
    if (this.sorting !== null && this.sorting.status && this.sorting.column) {
      sortList[`${this.sorting.column}`] = this.sorting.descending ? 'DESC' : 'ASC';
    }
    return sortList;
  }

  convertToTableDataSet(response: any) {
    return this.mapPath && Util.getObjectPathValue(response, this.mapPath) || null;
  }

  onLoadSuccessHandler(response: { data: any, totalCount?: number, totalPages?: number }) {
    if (this.mapPath) {
      const tableDataSet = this.convertToTableDataSet(response);
      this.onHttpResponseModifier.emit(response);
      this.rows = tableDataSet ? tableDataSet : [];
    } else if (response.data) {
      this.onHttpResponseModifier.emit(response);
      this.rows = response.data;
    } else if (Util.type(response) === 'Array') {
      response = {
        data: response,
        totalCount: (response as any).length,
        totalPages: Math.floor(((response as any).length / this.pageSize)),
      };
      this.onHttpResponseModifier.emit(response);
      this.rows = response.data;
    } else {
      this.reset();
    }
    if (this.hasPaging && this.serverSide) {
      if (response) {
        if (typeof response.totalCount !== 'undefined') {
          this.paging.totalCount = response.totalCount;
        }
        if (typeof response.totalPages !== 'undefined') {
          this.paging.totalPages = response.totalPages;
        }
      }
    }
    this.original = JSON.parse(JSON.stringify(this.original || this.rows));
    this.showing = JSON.parse(JSON.stringify(this.rows));
    this.rows = this.runPathFilter(this.rows);
    this.onHttpSucceed.emit({rows: this.original, shows: this.showing});
    if (this.rows.length <= 0) {
      this.htmlRendered(null);
    }
    this.setExcelOptions();
  }

  onLoadErrorHandler(error: HttpErrorResponse): void {
    this.onHttpError.emit(error);
    if (this.rows.length <= 0) {
      this.htmlRendered(null);
    }
  }

  htmlOnPageNumberChangeHandler(page: Pager) {
    this.pageNumber = page.pageNumber;
    this.load();
  }

  htmlOnPageSizeChangeHandler(page: Pager) {
    this.pageNumber = this.paging.pageSize < page.pageSize ? 1 : this.pageNumber;
    this.pageSize = page.pageSize;
    this.load();
  }

  htmlIsInSelectedList(row: any) {
    return !!this.list.find((item) => Util.isContained(row, item));
  }

  htmlOnClick(row: any, $event: MouseEvent, i: number) {
    clearTimeout(this.clickDelay);
    this.clickDelay = window.setTimeout(() => {
      if ($event.detail === 1) {
        if (this.multiSelect) {
          const index = this.list.indexOf(row);
          if (index < 0) {
            this._selected = row;
            this.list.push(row);
          } else {
            this._selected = null;
            this.list.splice(index, 1);
          }
        } else {
          this.list = [];
          if (this._selected === row) {
            this._selected = null;
          } else {
            this._selected = row;
            this.list.push(row);
          }
        }
        this.onTrClicked.emit({row: row, event: $event, index: i});
      }
    }, 260);
  }

  htmlOnDblClick(row: any, $event: MouseEvent, i) {
    window.clearTimeout(this.clickDelay);
    this.onTrDblClicked.emit({row: row, event: $event, index: i});
  }

  /**
   * Reload the table data again, it triggers to this.load();
   */
  actionHtmlLoad() {
    this.load();
  }

  /**
   * This table action deletes the selected row from reference table and send it to current table
   */
  actionHtmlAddReference() {
    this.rows = Util.union(this.rows, this.reference.list);
    this.reference.list.forEach(value => {
      this.reference.rows.splice(this.reference.rows.indexOf(value), 1);
    });
    this.list = this.reference.list;
    this.reference.list = [];
    if (this.events.drag && this.events.drag.complete) {
      this.events.drag.complete(this);
      this.dragReset();
    }
  }

  /**
   * This table action deletes the selected row from current table and send it to reference table
   */
  actionHtmlRemoveReference() {
    this.list.forEach((value) => {
      this.rows.splice(this.rows.indexOf(value), 1);
    });
    this.reference.rows = Util.union(this.reference.rows, this.list);
    this.reference.list = this.list;
    this.list = [];
    if (this.reference.events.drag && this.reference.events.drag.complete) {
      this.reference.events.drag.complete(this.reference);
      this.dragReset();
    }
  }

  actionHtmlDeleteRow(row: Object) {
    this.oDataHandler(CRUD.DELETE, row);
    this.onDeleteClicked.emit(row);
  }

  htmlDragOver($event: Event) {
    $event.preventDefault();
  }

  htmlDragStart(row: any, $event: DragEvent, index: number) {
    this.drag.start = true;
    if (this.list.indexOf(row) < 0) {
      this.htmlOnClick(row, $event, index);
    }
    const element = $event.target as HTMLElement;
    const found = element.querySelectorAll('object');
    if (found.length > 0) {
      found[0].remove();
    }
    $event.dataTransfer.effectAllowed = 'copy';
    $event.dataTransfer.setDragImage(element, 0, 0);
    $event.dataTransfer.setData('text', JSON.stringify(this.list));
  }

  htmlDrop($event: DragEvent) {
    $event.preventDefault();
    if (!this.drag.start) {
      const list = JSON.parse($event.dataTransfer.getData('text'));
      this.rows = [...this.rows, ...list];
      this.reference.dragCompleted();
      this.list = [...this.list, ...list];
      if (this.events.drag && this.events.drag.complete) {
        this.events.drag.complete(this);
      }
    }
  }

  dragCompleted() {
    this.list.map((item) => {
      const index = this.rows.indexOf(item);
      this.rows.splice(index, 1);
      this.list.splice(this.list.indexOf(item), 1);
    });
    this.dragReset();
    this.drag.start = false;
  }

  dragReset() {
    this.reference._selected = null;
    this._selected = null;
    this.reference.list = [];
    this.list = [];
  }

  changeActionStatus(status: any | boolean[] | boolean) {
    if (status !== null && status.getType() === 'Array') {
      for (const key in this.actions) {
        if (this.actions.hasOwnProperty(key)) {
          this.actions[key].disable = status[key];
        }
      }
    } else if (status !== null && status.getType() === 'Boolean') {
      for (const item of this.actions) {
        item.disable = status;
      }
    }
  }

  reset() {
    this.paging = {
      pageSize: this.paging.pageSize,
      pageNumber: 1,
      totalCount: 0,
      totalPages: 0,
    };
    this.filter = [];
    this.rows = [];
    this.creating = {};
  }

  htmlExpanderOpen(cell: { row, index, isLast, isFirst }) {
    event.preventDefault();
    event.stopPropagation();
    this.expanderStatus[cell.index] = !this.expanderStatus[cell.index];
  }

  htmlUpdateFocus(data: TableUpdateDataType) {
    (event.target as HTMLSpanElement).closest('tbody').querySelectorAll('.edit-focus').forEach(item => item.classList.remove('edit-focus'));
    (event.target as HTMLSpanElement).closest('td').classList.add('edit-focus');
    this.onUpdateFocus.emit(data);
  }

  htmlUpdateChange(data: TableUpdateDataType) {
    (event.target as HTMLSpanElement).closest('td').classList.add('editing');
    this.onUpdateChange.emit(data);
  }

  htmlUpdateBlur(data: TableUpdateDataType) {
    // (event.target as HTMLInputElement).parentElement.parentElement.classList.remove('edit-focus');
    this.onUpdateBlur.emit(data);
  }

  htmlUpdateAccept(data: TableUpdateDataType) {
    (event.target as HTMLButtonElement)
      .closest('tr')
      .querySelectorAll('.editing')
      .forEach(item => item.classList.remove('editing', 'edit-focus'));
    this.oDataHandler(CRUD.UPDATE, data.row);
    this.onUpdateAccepted.emit({
      ...data,
      row: JSON.parse(JSON.stringify(data.row)),
      clear: (status, updateDataType) => this.htmlUpdateCompleteClear(status, updateDataType),
    });
  }

  htmlUpdateCancel({column, row, showingCurrently, showingOriginal, fullOriginal, index, parentRow, parentIndex}: TableUpdateDataType) {
    const path = this.getColumnPath(row, column);
    const value = Util.getObjectPathValue(this.showing[index], path);
    Util.setObjectPathValue(row, path, value);
    (event.target as HTMLButtonElement).closest('td').classList.remove('editing', 'edit-focus');
    this.onUpdateCancel.emit({
      column,
      row,
      showingCurrently: showingCurrently,
      showingOriginal: showingOriginal,
      fullOriginal: fullOriginal,
      index,
      parentRow: this.parentRow,
      parentIndex: this.parentIndex,
    });
  }

  htmlUpdateStart() {
    (event.target as HTMLButtonElement).parentElement.querySelector('input').focus();
  }

  htmlCreateCanceled(column: TableColumn) {
    Util.setObjectPathValue(this.creating, column.variablePath, '');
    Util.clearNullAndUndefined(this.creating, true);
    (event.target as HTMLButtonElement)
      .closest('tr').querySelectorAll('.editing')
      .forEach(item => item.classList.remove('editing', 'edit-focus'));
  }

  htmlCreateAccepted(data: TableUpdateDataType) {
    (event.target as HTMLButtonElement)
      .closest('tr').querySelectorAll('.editing')
      .forEach(item => item.classList.remove('editing', 'edit-focus'));
    this.oDataHandler(CRUD.CREATE, data.row);
    window.clearTimeout(this.createClearTimeout);
    this.createClearTimeout = window.setTimeout(() => this.htmlCreateCompletedClear(true), 2000);
    this.onCreateAccepted.emit({
      ...data,
      row: JSON.parse(JSON.stringify(data.row)),
      clear: (status) => this.htmlCreateCompletedClear(status),
    });
  }

  htmlUpdateCompleteClear(status: boolean = true, updateDataType: TableUpdateDataType) {
    if (status && updateDataType) {
      this.rows[updateDataType.index] = JSON.parse(JSON.stringify(this.showing[updateDataType.index]));
    } else if (status && !updateDataType) {
      console.log('Please, send "TableUpdateDataType" to htmlUpdateCompleteClear(status: boolean = true, updateDataType: TableUpdateDataType) method as second parameter');
    }
  }

  htmlCreateCompletedClear(status: boolean = true) {
    window.clearTimeout(this.createClearTimeout);
    this.ngZone.run(() => this.creating = (status) ? this.creating = {} : JSON.parse(JSON.stringify(this.creating)));
  }

  isFunction(value): boolean {
    return (typeof (value) === 'function');
  }

  oDataHandler(type: CRUD, row: any) {
    if (this.oDataStatus) {
      switch (type) {
        case CRUD.CREATE:
          this.oDataCreate(row);
          return null;
        case CRUD.DELETE:
          this.oDataDelete(row);
          return null;
        case CRUD.UPDATE:
          this.oDataUpdate(row);
          return null;
      }
    }
  }

  oDataDelete(row: any) {
    if (row && row[this.oDataIdentityField]) {
      this.api.delete(`${this.service.url}(${row[this.oDataIdentityField]})`, {
        params: this.generateHttpParams(),
        headers: this.generateHttpHeaders(),
      }).subscribe((response) => {
        this.onDeleteHttpSucceed.emit(response);
        this.load();
      }, (error: HttpErrorResponse) => {
        this.onDeleteHttpError.emit(error);
      });
    }
  }

  oDataUpdate(row: any) {
    if (row && row[this.oDataIdentityField]) {
      this.api.put(`${this.service.url}(${row[this.oDataIdentityField]})`, row, {
        params: this.generateHttpParams(),
        headers: this.generateHttpHeaders(),
      }).subscribe((response) => {
        this.onUpdateHttpSucceed.emit(response);
        this.load();
      }, (error: HttpErrorResponse) => {
        this.onUpdateHttpError.emit(error);
        this.load();
      });
    }
  }

  oDataCreate(row: any) {
    if (row) {
      this.api.post(`${this.service.url}`, row, {
        params: this.generateHttpParams(),
        headers: this.generateHttpHeaders(),
      }).subscribe((response) => {
        this.onCreateHttpSucceed.emit(response);
        this.load();
      }, (error: HttpErrorResponse) => {
        this.onCreateHttpError.emit(error);
      });
    }
  }

  htmlMultiSelect(event) {
    this.rows.filter(row => {
      const index = this.list.indexOf(row);
      event.target.checked && index < 0 ? this.list.push(row) : !event.target.checked ? this.list.splice(index, 1) : null;
    });
  }
}
