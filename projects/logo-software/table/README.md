## Table Module

This module generates a table using the given data. The table can generate data using server-side Http requests or given direct data using the client-side feature.

### Installation
There are three steps:

 - Install package using `npm install @logo-software/table` 
 - Add `TableModule` to target module imports `@NgModule({..., imports: [BrowserModule, TableModule...], ...})`

### Configuration

There is no configuration need just plug and play

#### Usage Example

First import `TableModule` to your target module imports section. In this example, we add AppModule for display table at `app.component.ts`
 
<sub>**app.module.ts**</sub>
```typescript
import { LanguageInitSetting, LanguageModule } from '@logo-software/language'; 
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component'; 

import { TableModule } from '@logo-software/table';

@NgModule({
  declarations: [AppComponent],
  imports: [TableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Then you can use it at your `app.component.html` file:

<sub>**app.component.html**</sub>
```hmtl
<logo-table 
    [columns]="tableDummyData.columns" 
    [rows]="tableDummyData.rows"
>
</logo-table>
```

Then set data at `app.component.ts` file:

<sub>**app.component.ts**</sub>

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'lbs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
tableDummyData: { 
    columns: [
      {display: 'ID', variablePath: 'id', filterType: 'text', hidden: false},
      {display: 'zone.name', variablePath: 'zone.name', filterType: 'text', sortable: true},
      {display: 'count', variablePath: 'percentage', filterType: 'range', format: '1.1-3:"en-EN"', sortable: true},
      {display: 'date', variablePath: 'hour', filterType: 'date', format: 'yyyy.MM.dd HH:mm', sortable: true},
      {display: 'surname', variablePath: 'surname', filterType: 'custom'},
      {display: 'because', variablePath: 'because', filterType: 'number', format: '4.2-3', sortable: true},
      {
        display: 'total',
        variableFunction: (row: any) => row.percentage === 34 ? row.percentage + ' added text adsasd asdasdasd asdsad ' : 0,
        className: 'total',
        sortable: true,
        sortingKey: 'zone.name',
      }
    ],
    rows: [
      {id: '1', zone: {name: 'Çorum'}, percentage: 19, hour: '2019-01-13', surname: 'konakcı', because: 2132131},
      {id: '2', zone: {name: 'Adana'}, percentage: 6, hour: '2019-12-22', surname: 'meydancı', because: 1235},
      {id: '3', zone: {name: 'İstanbul'}, percentage: 34, hour: '2018-03-13', surname: 'uyar', because: 54466},
      {id: '4', zone: {name: 'Samsun'}, percentage: 55, hour: '2017-06-15', surname: 'güler', because: 65467},
      {id: '1', zone: {name: 'Çorum'}, percentage: 19, hour: '2019-12-31', surname: 'sevim', because: 9876543},
      {id: '2', zone: {name: 'Ceyhan'}, percentage: 6, hour: '2013-05-11', surname: 'çakmak', because: 4556132},
      {id: '3', zone: {name: 'Şile'}, percentage: 34, hour: '2014-06-05', surname: 'duran', because: 543567},
      {id: '4', zone: {name: 'Konya'}, percentage: 55, hour: '2019-05-23', surname: 'güleç', because: 743567},
      {id: '1', zone: {name: 'Diyarbakır'}, percentage: 19, hour: '2019-07-05', surname: 'toraman', because: 98723567},
      {id: '2', zone: {name: 'Malatya'}, percentage: 6, hour: '2019-03-15', surname: 'kandır', because: 43787654},
      {id: '3', zone: {name: 'Kastamonu'}, percentage: 34, hour: '2019-08-13', surname: 'misafir', because: 123824},
      {id: '4', zone: {name: 'Bitlis'}, percentage: 55, hour: '2019-02-03', surname: 'deneme', because: 234567},
      {id: '1', zone: {name: 'Polatlı'}, percentage: 19, hour: '2019-09-21', surname: 'deneme', because: 23589},
      {id: '2', zone: {name: 'Van'}, percentage: 6, hour: '2011-11-19', surname: 'deneme', because: 354353},
      {id: '3', zone: {name: 'Bartın'}, percentage: 34, hour: '2011-03-23', surname: 'deneme', because: 34539},
      {id: '4', zone: {name: 'Kadıköy'}, percentage: 55, hour: '2016-02-27', surname: 'deneme', because: 93922},
    ]
  }
}
```
