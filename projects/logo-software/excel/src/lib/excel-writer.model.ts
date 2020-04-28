import * as xmlBuilder from 'xmlbuilder';

export class ExcelWriter {
  public options: any = {pretty: true};
  public columns: any[] = [];
  public dom: any;
  public data: any;
  public header: any[] | null = null;

  constructor(options: any = {}) {
    this.options = {...this.options, ...options};
  }

  static isoDateString(date: Date) {
    return date.toISOString().split('Z')[0];
  }

  xlsTo(data: any, header: string[]) {
    if (header) {
      this.header = header;
    }
    return this.writeDoc(data).toString(this.options);
  }

  createDom() {
    this.dom = xmlBuilder.create('ss:Workbook')
      .att('xmlns', 'urn:schemas-microsoft-com:office:spreadsheet')
      .att('xmlns:o', 'urn:schemas-microsoft-com:office:office')
      .att('xmlns:x', 'urn:schemas-microsoft-com:office:excel')
      .att('xmlns:html', 'http://www.w3.org/TR/REC-html140')
      .att('xmlns:ss', 'urn:schemas-microsoft-com:office:spreadsheet');
  }

  addStyle() {
    this.dom = this.dom.ele('ss:Styles')
      .ele('ss:Style').att('ss:ID', '1')
      .ele('ss:Font').att('ss:Bold', '1').up().up();
    this.dom = this.dom.ele('ss:Style').att('ss:ID', 'Default').att('ss:Name', 'Normal')
      .ele('ss:Alignment').att('ss:Vertical', 'Center').up().up().up();
  }

  getRows(sheetTitle: any) {
    let rows = this.data[sheetTitle];
    if (!Array.isArray(rows) && rows) {
      rows = [rows];
    }
    return rows;
  }

  createColumnWidth(columns: any[]) {
    columns.forEach((columnTitle: string, columnIndex: number) => {
      columnIndex += 1;
      this.dom = this.dom.ele('ss:Column').att('ss:Index', columnIndex).att('ss:AutoFitWidth', '1').up();
    });
  }

  createColumnHeader(columns: any[]) {
    this.dom = this.dom.ele('ss:Row').att('ss:StyleID', '1').att('ss:Height', '40');
    columns.forEach((columnTitle: string, columnIndex: number) => {
      const title = (this.header) ? this.header[columnIndex] : columnTitle;
      this.dom = this.dom.ele('ss:Cell').ele('ss:Data').att('ss:Type', 'String').txt(title).up().up();
    });
  }

  createRows(rows: any[], columns: any[]) {
    rows.forEach((record: any) => {
      this.dom = this.dom.ele('ss:Row').att('ss:Height', '40');
      this.createRowColumns(columns, record);
      this.dom = this.dom.up();
    });
  }

  createRowColumns(columns: any, record: any) {
    columns.forEach((columnTitle: string, columnIndex: number) => {
      const val = record[columnTitle];
      columnIndex += 1;
      if (typeof val !== 'undefined' && val !== null && val.constructor !== Function) {
        if (val && val.constructor === Object) {
          if (val instanceof Date) {
            this.dom = this.dom.ele('ss:Cell')
              .att('ss:Index', columnIndex)
              .att('ss:StyleID', 'DateTime').ele('Data').att('ss:Type', 'DateTime')
              .raw(ExcelWriter.isoDateString(val)).up().up();
          } else {
            if (val instanceof Array) {
            }
          }
        } else {
          if (val.constructor === Boolean) {
          } else if (val.constructor === Number) {
            this.dom = this.dom
              .ele('ss:Cell')
              .att('ss:Index', columnIndex)
              .ele('ss:Data').att('ss:Type', 'Number').txt(val).up().up();
          } else if (val !== undefined && val !== null) {
            const str = val.split('\u000b').join(' ');
            // chr = str.match(chars);
            this.dom = this.dom
              .ele('ss:Cell')
              .att('ss:Index', columnIndex)
              .ele('ss:Data').att('ss:Type', 'String').txt(str).up().up();
          }
        }
      }
    });
  }

  writeDoc(object: any) {
    this.createDom();
    this.data = (Array.isArray(object)) ? {Export: object} : object || {};
    if (this.data.constructor !== Object) {
      return this.dom.doc();
    }
    this.addStyle();
    Object.keys(this.data).forEach((sheetTitle: string) => {
      let rows = this.getRows(sheetTitle);
      let columns: any;
      if (!rows || !rows.length) {
        return;
      }
      if (rows[0] && rows[0].constructor !== Object) {
        columns = [sheetTitle];
        rows = rows.map((row: any) => {
          const tmp: any = {};
          tmp[sheetTitle] = row;
          return tmp;
        });
      } else {
        columns = Object.keys(rows[0] || {});
      }
      this.dom = this.dom.ele('ss:Worksheet').att('ss:Name', sheetTitle).ele('ss:Table');
      this.createColumnWidth(columns);
      this.createColumnHeader(columns);
      this.dom = this.dom.up();
      this.createRows(rows, columns);
      this.dom = this.dom.up().up();
    });
    return this.dom.doc();
  }
}
