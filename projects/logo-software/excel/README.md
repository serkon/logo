# Excel Module
Any given data or any service that returned data can be exportable with this component to Excel.

Click here for [demo](http://design.logo.com.tr/#/docs/components/excel-module#excelmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Excel Module:

 ```bash
 $ npm set registry https://registry.npmjs.org/
 $ npm install @logo-software/excel -s
 ```

Just import it to your project of `@NgModule` import section.

 ```typescript
 @NgModule({
  imports: [CommonModule, ExcelModule],
})
export class AppModule {
}
 ```

### Dependencies ###

While installing `@logo-software/excel`, package manager also will be installing these packages as a dependency:

* file-saver
* xmlbuilder
 
### Excel Component
A quick JavaScript library to create export to Excel/CSV from given data. No server required.

If set service information it will call a Rest API then send data to ExcelModule for export.

Add the below code to your code stack and give initializer parameters.

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

Dummy data will be used:

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
    {id: 1, code: 2345, user: {name: 'Serkan', surname: 'Konakcı'}},
    {id: 2, code: 6789, user: {name: 'Serdar', surname: 'Alkan'}},
    {id: 3, code: 1011, user: {name: 'Banu', surname: 'Ortaç'}}
  ]
};
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
