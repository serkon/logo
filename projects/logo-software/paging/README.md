## Paging Module

Paging module uses when paging properties required. The Table Module is can be given as a using sample. Just import it to @NgModule' import section.

```typescript
import { PagingModule } from '@logo-software/paging';

@NgModule({
  declarations: [PagingComponent],
  imports: [CommonModule, PagingModule],
})
export class AppModule {
}
```
### Installation
**ng-logo** libraries can be installed from the Npm Server. All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). 
Choose a package which required then run npm install @logo/(package_name) command to install it.
For example, if you want to install @logo/paging package:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/paging -s
```

### Usage Example

Add the below code to your code stack and give initializer parameters.

<sub>html</sub>
```html
   <logo-paging
     (pageNumberChange)="pagingModule.onPageChangeHandler($event)"
     *ngIf="true"
     [pageSize]="5"
     [totalCount]="140"
   >
   </logo-paging>
 ```