# Paging Module

The paging module splits your data collection into pages. The Table Module is can be given as a using sample.

Click here for [demo](http://design.logo.com.tr/#/docs/components/paging-module#pagingmodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Paging Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/paging -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, PagingModule]
})
export class AppModule {
}
```

### Paging Component

Paging component display paging for other components. You can adopt paging any component using this component.

Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-paging
  (pageNumberChange)="pagingModule.onPageChangeHandler($event)"
  [pageSize]="5"
  [totalCount]="140"
>
</logo-paging>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
