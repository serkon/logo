import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExcelSettingType } from '@logo-software/excel';

@Component({
  selector: 'logo-excel-showcase',
  templateUrl: './excel-showcase.component.html',
  styleUrls: ['./excel-showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExcelShowcaseComponent {
  excelSample: ExcelSettingType = {  // Excel Module
    name: 'ExcelFile',
    header: ['CODE', 'ADDRESS', 'NAME', 'SURNAME'],
    complete: this.excelComplete,
    columns: [
      {
        display: 'ID',
        variablePath: 'id',
        hidden: true,
      },
      {
        display: 'Code',
        variablePath: 'code',
      },
      {
        display: 'Address',
        variablePath: 'recipient.address',
      },
      {
        display: 'Name',
        variablePath: 'user.name',
      },
      {
        display: 'Surname',
        variablePath: 'user.surname',
      },
    ],
    data: [
      {id: 1, code: 123213, recipient: {address: 'Doğ sok. 8/10 Ankara'}, user: {name: 'Serkan', surname: 'Konakcı'}},
      {id: 2, code: 2134, recipient: {address: 'Ateş sok. 3/5 İstanbul'}, user: {name: 'Seda', surname: 'Sayan'}},
      {id: 3, code: 456456, recipient: {address: 'Kıvılcım apt. 5/23 Konya'}, user: {name: 'Banu', surname: 'Alkan'}},
    ],
  };

  excelComplete() {
    alert('excel export completed');
  }
}
