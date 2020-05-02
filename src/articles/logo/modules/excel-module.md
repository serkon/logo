# Excel Module
Any given data or any service returned data can be exportable with this component to Excel.
For more information please visit [http://developer.logo.com.tr](http://developer.logo.com.tr/#/docs/modules/excel-module#excel-module)

### Installation
All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Excel Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/excel -s
```

### Dependencies
While installing @logo-software/excel, package manager also will be installing these packages as a dependency:
* file-saver
* xmlbuilder

### Usage

First, add ExcelModule to the declaration of the`@NgModule`'s imports section:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelComponent } from './excel.component';

@NgModule({
  declarations: [ExcelComponent],
  imports: [CommonModule],
  exports: [ExcelComponent],
})
export class ExcelModule {
}
```

Then add your component excel module selector and give the data you will export.

<sub>html</html>

````html
<excel
  (complete)="excelComplete()"
  [data]="excelSample.data"
  [columns]="excelSample.column"
  [header]="excelSample.header"
  [name]="excelSample.fileName"
>
</excel>
````

<sub>typescript</sub>

````typescript
const excelSample = {
   fileName: 'ExcelFile',
   header: ['ID', 'NAME', 'SURNAME'],
   column: [
     { display: 'ID', variablePath: 'id', hidden: true },
     { display: 'Name', variablePath: 'user.name' },
     { display: 'Surname', variablePath: 'user.surname' }
   ],
   data: [
     {id: 1, code: 123213, user: {name: 'Serkan', surname: 'Konakcı'}},
     {id: 2, code: 2134, user: {name: 'Seda', surname: 'Sayan'}},
     {id: 3, code: 456456, user: {name: 'Banu', surname: 'Alkan'}}
   ]
};
````
