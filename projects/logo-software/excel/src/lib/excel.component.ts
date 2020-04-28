/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as FileSaver from 'file-saver';
import { ExcelWriter } from './excel-writer.model';
import { CvsWriter } from './cvs-writer.model';

/**
 * Excel column properties. This must be given for each column property will be displayed.
 * Data will be get from variablePath of a given object.
 */

export class ExcelTableColumn {
  /**
   *   Display text will be shown at the column header
   */
  display: string;
  /**
   * This is the variable store path that will pull from the data object.
   * Separated using the dot (.) for nested object path. Example: const = {user:{name: 'serkan', surname: 'konakci'}};
   * For example:
   * if your data is const data = {name: 'serkan', address: {city: 'istanbul', district: 'atasehir'}}
   * For `District` column variablePath must be `data.address.district`. Module export this data from there.
   */
  variablePath: string;
  /**
   *   hidden true will hide the column
   */
  hidden?: boolean;
}

export enum ResponseContentEnum {
  Text = 'text',
  Json = 'json',
  ArrayBuffer = 'arraybuffer',
  Blob = 'blob',
}

/**
 * If data will be requested from remote server, some service configuration must be set before.
 * The type of the property of ExcelSettingType's service is a RequestOption. If set an service.url, data will
 * be requested from server.
 */
export interface RequestOptions<T> {
  /**
   * One of the http request methods. Default is 'GET'.
   */
  method?: string;
  /**
   * The url of the where data will be requested. If not set service call will not be initialized.
   */
  url?: string | null | undefined;
  /**
   * The HttpHeader sets the value of an HTTP request header.
   */
  headers?: HttpHeaders;
  /**
   * HttpBody parameter, http request will be send with this body option.
   */
  body?: any;
  /**
   * HttpParams parameter, http request url will be changed with this parameters.
   */
  params?: HttpParams | any;
  /**
   * The XMLHttpRequest.withCredentials property is a Boolean that indicates whether or not cross-site Access-Control
   * requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
   * Setting withCredentials has no effect on same-site requests.
   */
  withCredentials?: boolean;
  /**
   * The XMLHttpRequest property responseType is an enumerated string value specifying the type of data
   * contained in the response. It also lets the author change the response type. If an empty string
   * is set as the value of responseType, the default value of "text" is used.
   */
  responseType?: ResponseContentEnum;
}

/**
 * Configuration of Excel Module. Excel module configuration declaration must be below.
 */
export interface ExcelSettingType {
  /**
   * Columns information that contains **display**, **variablePath** and **hidden** properties.
   * It is necessary for which path to look for to pull the data, it will be displayed or what will be the header.
   * Please look more for this [link](docs/logo-business-solutions/excel-module#exceltablecolumn).
   */
  columns?: ExcelTableColumn[];
  /**
   * Any data will be shown in excel
   */
  data?: any[];
  /**
   * Set component visibility. if set false excel export button will not be shown. And component DOM not be rendered.
   */
  status?: boolean;
  /**
   * The text array will be shown at header. It is optional if not set column.display text will be set as default.
   */
  header?: string[] | null;
  /**
   * File name will be exported
   */
  name?: string;
  /**
   * if set service data will be get from this URL.
   */
  service?: RequestOptions<any>;
  /**
   * There are two type export is available. These are xls and cvs. Default is xls.
   */
  type?: string;
  /**
   * This function will be triggered when data is received from server.
   */
  complete?: Function;
}

/**
 * A quick JavaScript library to create export to Excel/CSV from given data. No server required.
 * If set service information it will call a Rest API then send data to ExcelModule for export.
 * @stacked-example(ExcelComponent, logo/excel-sample/excel-showcase/excel-showcase.component)
 */
@Component({
  selector: 'logo-excel',
  template: `
    <ng-container *ngIf="status">
      <span (click)="download()" class="wrapper"><ng-content></ng-content></span>
      <button class="default-content" (click)="download()">Excel</button>
    </ng-container>
  `,
  styleUrls: ['./excel.component.scss'],
})
export class ExcelComponent {
  /**
   * Columns information that contains **display**, **variablePath** and **hidden** properties.
   * It is necessary for which path to look for to pull the data, it will be displayed or what will be the header.
   * Please look more for this [link](docs/logo-business-solutions/excel-module#exceltablecolumn).
   */
  @Input() public columns: ExcelTableColumn[];
  /**
   * Any data will be shown in excel
   */
  @Input() public data: any[] = [];
  /**
   * Set component visibility. if set false excel export button will not be shown. And component DOM not be rendered.
   */
  @Input() public status = true;
  /**
   * The text array will be shown at header. It is optional if not set column.display text will be set as default.
   */
  @Input() public header: string[] = null;
  /**
   * File name will be exported
   */
  @Input() public name = `Export`;
  /**
   * if set service.url data will be get from this URL. Default request method is 'GET'.
   */
  @Input() public service: RequestOptions<any> = {
    url: null,
    method: 'GET',
    body: [],
    headers: new HttpHeaders(),
    withCredentials: true,
    params: new HttpParams(),
  };
  /**
   * There are two type export is available. These are xls and cvs. Default is xls.
   */
  @Input() public type = 'xls';
  /**
   * This function will be triggered when data is received from server.
   */
  @Output() public complete: EventEmitter<any> = new EventEmitter();

  /**
   * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
   *
   * @param elementRef - The underlying native element or `null`
   * @param http -  `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
   * Each request method has multiple signatures, and the return type varies based on
   * the signature that is called (mainly the values of `observe` and `responseType`).
   */
  constructor(public elementRef: ElementRef, private http: HttpClient) {
  }

  /**
   * This method call http request if set service url given then call onSuccessHandler for complete event.
   */
  download() {
    const {method, url, ...options} = this.service;
    if (this.status === false && this.columns.length <= 0) {
      console.error('Columns property is empty. Please set columns for work duly.');
    } else {
      if (!!url) {
        this.http.request(method, url, options).subscribe((response) => this.onSuccessHandler(response));
      } else {
        this.onSuccessHandler(this.data);
      }
    }
  }

  /**
   * if data successfully requested this method will be triggered then
   * it will call excelSaver method for export data as excel or cvs
   *
   * @param response - any data will be send to excel/cvsSaver
   */
  onSuccessHandler(response: any) {
    this.complete.emit(response);
    (response && this.type !== 'csv') ? this.excelSaver(response) : this.csvSaver(response);
  }

  /**
   * This method exports data with the ExcelTableColumn.display property
   * as a new object by defined ExcelTableColumn.variablePath
   * @param data - Any data will be exported
   */
  excelDataMaintenance(data: any): any {
    return data.map((item: any) => {
      const push: any = {};
      this.columns.forEach((column: ExcelTableColumn) => {
        if (!column.hidden) {
          push[column.display] = this.getObjectPathValue(item, column.variablePath);
        }
      });
      return push;
    });
  }

  /**
   * This method export data by given ExcelTableColumn.variablePath value as a new Array
   * @param data
   */
  cvsDataMaintenance(data: any): any[] {
    return data.map((item: any) => {
      return this.columns.map((column: any) => {
        return this.getObjectPathValue(item, column.variablePath);
      });
    });
  }

  /**
   * Get value by given path of object
   * @example
   * var m = {a: {b:1, c: {d: {e: [1,2,3]}}}}
   * Util.getObjectPathValue(m, "a.c.d.e") // result is (3) [1, 2, 3]
   * @param value - The object from which to import data
   * @param path - String path of the target property
   */
  getObjectPathValue(value: any, path: string) {
    let data = value;
    if (!!path && path.constructor === String) {
      path.split('.').forEach(function (val: any) {
        data = (data !== null && typeof data !== 'undefined') ? data[val] : null;
      });
    }
    return data;
  }

  /**
   * Convert HttpResponse to excel file, then show save dialog
   * @param value - Data
   */
  excelSaver(value: any) {
    const xmlSheet = new ExcelWriter().xlsTo(this.excelDataMaintenance(value), this.header);
    const blob = new Blob(
      [xmlSheet],
      {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'},
    );
    this.fileSaver(blob, 'xls');
  }

  /**
   * Convert HttpResponse to cvs file, then show save dialog
   * @param value - Data
   */
  csvSaver(value: any) {
    const cvsSheet = new CvsWriter(this.cvsDataMaintenance(value), this.header).toCvs();
    const blob = new Blob([cvsSheet], {type: 'text/csv;charset=utf-8;'});
    this.fileSaver(blob, 'csv');
  }

  /**
   * File saver
   * @param blob
   * @param type
   */
  fileSaver(blob: any, type: string) {
    FileSaver.saveAs(blob, `${this.name} - ${new Date().toISOString().slice(0, -5)}.${type}`);
  }
}
