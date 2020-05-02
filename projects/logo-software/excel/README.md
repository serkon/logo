# Excel Module
Any given data or any service that returned data can be exportable with this component to Excel.

### Installation
**ng-logo** libraries can be installed from the Npm Server. All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). 
Choose a package which required then run npm install @logo/(package_name) command to install it.
For example, if you want to install @logo/excel package:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/excel -s
```

### Dependencies ###
While installing @logo-software/excel, package manager also will be installing these packages as a dependency:
* file-saver
* xmlbuilder
 
### Usage
````angular2html
<excel
(complete)="excelComplete()"
[data]="excelSample.data"
[columns]="excelSample.column"
[header]="excelSample.header"
[name]="excelSample.fileName"
>
</excel>
```` 

### Data Sample
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
