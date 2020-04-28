export class CvsWriter {
  private data: any;
  private header: any[] | null = null;

  constructor(data: any, header: any[] | null) {
    this.data = data;
    this.header = header;
  }

  toCvs() {
    let temp = this.header ? this.header.join(';') + '\r\n' : '';
    this.data.forEach((item: any) => {
        temp += item.join(';') + '\r\n';
      },
    );
    return temp;
  }
}
