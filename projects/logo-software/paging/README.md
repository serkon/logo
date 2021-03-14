## Paging Module

Paging module uses when paging properties required. The Table Module is can be given as a using sample. Just import it to @NgModule' import section.

Click here for [demo](http://design.logo.com.tr/#/docs/components/paging-module#pagingmodule)

### Installation
libraries can be installed from the Npm Server. All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). 
Choose a package which required then run npm install @logo-software/(package_name) command to install it.
For example, if you want to install @logo-software/paging package:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/paging -s
```

<sub>app.module.ts</sub>

```typescript
import { PagingModule } from '@logo-software/paging';

@NgModule({
  declarations: [PagingComponent],
  imports: [CommonModule, PagingModule],
})
export class AppModule {
}
```

### Usage Example

Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
   <logo-paging
     (pageNumberChange)="pagingModule.onPageChangeHandler($event)"
     *ngIf="true"
     [pageSize]="5"
     [totalCount]="140"
   >
   </logo-paging>
 ```
