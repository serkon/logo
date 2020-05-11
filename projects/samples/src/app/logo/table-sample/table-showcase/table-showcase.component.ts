import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FilterType, TableAction, TableComponent, TableMeta, TableUpdateDataType } from '@logo-software/table';

@Component({
  selector: 'logo-table-showcase',
  templateUrl: './table-showcase.component.html',
  styleUrls: ['./table-showcase.component.scss'],
})
export class TableShowcaseComponent {
  @ViewChild(TableComponent, {static: true}) tableComponent;
  public actions: TableAction[] = [
    {
      click: (table) => {
        table.serverSide = !table.serverSide;
        table.load();
      },
      display: ``,
      className: 'person',
      classFunction: (table) => table.serverSide ? 'button-selected' : 'logo-person',
      disable: false,
    },
  ];
  public tableDummyData: TableMeta<any> = { // Table Module
    status: true,
    list: [],
    columns: [
      {
        display: 'ID', variablePath: 'id', filterType: FilterType.TEXT, hidden: false, editable: true,
      },
      {
        display: 'var-path-1',
        variablePath: (row: any) => 'id',
        filterType: FilterType.TEXT,
        sortable: true,
        sortingKey: 'id',
        editable: true,
      },
      {
        display: 'var-path-2',
        variablePath: (row: any) => row.percentage > 9 ? 'percentage' : 'because',
        filterType: FilterType.NUMBER,
        format: '1.1-3',
        sortable: true,
        sortingKey: 'because',
        expand: true,
      },
      {
        display: 'zone.name', variablePath: 'zone.name', filterType: FilterType.TEXT, sortable: true,
      },
      {
        display: 'currency',
        variablePath: 'percentage',
        filterType: FilterType.CURRENCY,
        format: '',
        sortable: true,
      },
      {
        display: 'percentage',
        variablePath: 'percentage',
        filterType: FilterType.PERCENT,
        format: '1.1-3:"it"',
        sortable: true,
      },
      {
        display: 'datetime', variablePath: 'hour', filterType: FilterType.DATETIME, format: 'yyyy.MM.dd HH:mm', sortable: true,
      },
      {
        display: 'surname', variablePath: 'surname', filterType: FilterType.CUSTOM,
      },
      {
        display: 'number', variablePath: 'because', filterType: FilterType.NUMBER, format: '4.2-3', sortable: true,
      },
      {
        display: 'Func Samp 1',
        variableFunction: (row: any) => row.percentage >= 34 ? row.zone && row.zone.name + ' <b>text</b>' : row.id,
        className: 'total',
        classFunction: (row) => (row.percentage >= 20 ? 'bigger' : 'smaller'),
        sortable: true,
        sortingKey: 'zone.name',
      },
      {
        display: 'Func Samp 2',
        variableFunction: (row: any) => row.percentage > 9 ? row.percentage + ' <i>added</i>' : row.because ? row.because : 'yok ' + '<b>not</b>',
        className: 'total',
        sortable: true,
        sortingKey: 'zone.name',
      },
    ],
    heads: [
      {
        display: 'Custom Head 1',
        className: 'cus01',
      },
      {
        display: 'Custom Head 2',
        className: 'cus02',
      },
    ],
    rows: [
      {id: 0, zone: {name: 'Çorum'}, percentage: 0.133191, hour: '2019-01-13', surname: 'konakcı', because: 2132131},
      {id: 1, zone: {name: 'Adana'}, percentage: 633, hour: '2019-12-22', surname: 'meydancı', because: 1235},
      {id: 2, zone: {name: 'İstanbul'}, percentage: 314, hour: '2018-03-13', surname: 'uyar', because: 54466},
      {id: 3, zone: {name: 'Samsun'}, percentage: 554, hour: '2017-06-15', surname: 'güler', because: 65467},
      {id: 4, zone: {name: 'Çorum'}, percentage: 219, hour: '2019-12-31', surname: 'sevim', because: 9876543},
      {id: 5, zone: {name: 'Ceyhan'}, percentage: 641, hour: '2013-05-11', surname: 'çakmak', because: 4556132},
      {id: 6, zone: {name: 'Şile'}, percentage: 134, hour: '2014-06-05', surname: 'duran', because: 543567},
      {id: 7, zone: {name: 'Konya'}, percentage: 455, hour: '2019-05-23', surname: 'güleç', because: 743567},
      {id: 8, zone: {name: 'Diyarbakır'}, percentage: 148, hour: '2019-07-05', surname: 'toraman', because: 98723567},
      {id: 9, zone: {name: 'Malatya'}, percentage: 316, hour: '2019-03-15', surname: 'kandır', because: 43787654},
      {id: 10, zone: {name: 'Kastamonu'}, percentage: 334, hour: '2019-08-13', surname: 'misafir', because: 123824},
      {id: 11, zone: {name: 'Bitlis'}, percentage: 545, hour: '2019-02-03', surname: 'deneme', because: 234567},
      {id: 12, zone: {name: 'Polatlı'}, percentage: 195, hour: '2019-09-21', surname: 'deneme', because: 23589},
      {id: 13, zone: {name: 'Van'}, percentage: 161, hour: '2011-11-19', surname: 'deneme', because: 354353},
      {id: 14, zone: {name: 'Bartın'}, percentage: 314, hour: '2011-03-23', surname: 'deneme', because: 34539},
      {id: 15, zone: {name: 'Kadıköy'}, percentage: 13425, hour: '2016-02-27', surname: 'deneme', because: 93922},
    ],
    events: {
      drag: {
        start: () => console.log('dragged started'),
        complete: () => console.log('dragged completed'),
      },
    },
    excel: {
      status: true,
      complete: (data) => {
        console.log('trigger excel');
        console.log('excel, table: ', data);
      },
    },
  };
  public serverSide: boolean = false;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef, private ngZone: NgZone) {
    this.getUser();
  }


  getUser() {
    this.http.get('http://localhost:3100/user/123').subscribe((data) => console.log('####data: ', data));
  }

  action(label, table) {
    console.log(label, table);
  }

  expanderEmitter(data: { row, index, isLast }) {
    return data.row.percentage > 5;
  }

  onTrClicked({row, event, index}) {
    console.log('clicked', row);
  }

  onTrDblClicked({row, event, index}) {
    console.log('clicked', row);
  }

  onRenderCompleted(data: { rows, row }) {
    console.log('completed: ', data);
  }

  onHttpSucceed(data: { rows, row }) {
    console.log('loaded: ', data);
  }

  onUpdateFocus(data: TableUpdateDataType) {
    console.log('sample focus: ', data);
  }

  onUpdateBlur(data: TableUpdateDataType) {
    console.log('sample blur: ', data);
  }

  onUpdateChange(data: TableUpdateDataType) {
    console.log('sample editing: ', data);
  }

  onUpdateAccepted(data: TableUpdateDataType) {
    console.log('sample accept: ', data);
    this.tableDummyData.rows[data.row.id] = data.row;
    data.clear(false, data);
  }

  onUpdateCancel(data: TableUpdateDataType) {
    console.log('sample cancel: ', data);
  }

  onCreateAccepted(data: TableUpdateDataType) {
    // data.clear(true);
    console.log('sample new accept: ', data);
    // const newData = JSON.parse(JSON.stringify(this.tableDummyData.rows));
    // newData.push(data.row);
    // this.tableDummyData.rows = newData;
    this.tableDummyData.rows.push(data.row);
    this.tableDummyData.rows = [...this.tableDummyData.rows];
    // data.clear(true);
  }

  onHttParams(param) {
    param['newValuetoParam'] = 333;
  }

  onHttpHeaders(headers) {
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = 'Bearer application/json';
    headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0;) Gecko/20100101 Firefox/68.0';
  }

  onHttpResponseModifier(response: { data: any, totalCount?: number, totalPages?: number }) {
    Object.assign(response, {totalCount: 333334});
    response.totalCount = 3333;
  }

  onHttpError(error: HttpErrorResponse) {
    console.log(error);
  }

  onDeleteClicked(row: any) {
    console.log(row);
  }

  onDeleteHttpSucceed(response: any) {
    console.log(response);
  }

  onDeleteHttpError(error: any) {
    console.log(error);
  }

  onUpdateHttpSucceed(response: any) {
    console.log(response);
  }

  onUpdateHttpError(error: any) {
    console.log(error);
  }

  onCreateHttpSucceed(response: any) {
    console.log(response);
  }

  onCreateHttpError(error: any) {
    console.log(error);
  }

  onTrClickedChild(row: any) {
    console.log(row);
  }
}
