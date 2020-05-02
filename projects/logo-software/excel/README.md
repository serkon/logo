# Excel Module
Any given data or any service that returned data can be exportable with this component to Excel.

### Installation
All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Excel Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/excel -s
```
<sub>**sample.module.ts**</sub>

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelModule } from '@logo-software/excel';

@NgModule({
  declarations: [SampleComponent],
  imports: [CommonModule, ExcelModule],
  exports: [SampleComponent],
})
export class SampleModule {
}
```

### Dependencies ###
While installing @logo-software/excel, package manager also will be installing these packages as a dependency:
* file-saver
* xmlbuilder
 
### Usage
Add `logo-excel` html tag to the component and give initial values.

```html
<logo-excel
(complete)="excelComplete()"
[data]="excelSample.data"
[columns]="excelSample.column"
[header]="excelSample.header"
[name]="excelSample.fileName"
>
</logo-excel>
```

### Data Sample

Dummy data will be used for example:

```typescript
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
    {id: 2, code: 2134, user: {name: 'Esra', surname: 'Asyan'}},
    {id: 3, code: 456456, user: {name: 'Banu', surname: 'Kan'}}
  ]
};
```
