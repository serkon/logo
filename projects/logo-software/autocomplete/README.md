# Autocomplete Module

The autocomplete component is an input field that provides selectable suggestions as a merchant types into it. It allows
merchants to quickly search through and select from large collections of options.

Click here for [demo](http://design.logo.com.tr/#/docs/components/autocomplete-module#autocompletemodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Autocomplete Module:

  ```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/autocomplete -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, AutocompleteModule],
})
export class AppModule {
}
```

### Autocomplete Component

A Autocomplete displays a ListBox related to the input, which enables the user to select items from the list or enter a
value for filtering this list then can select an item.

```html

<logo-autocomplete (filter)="onFiltered($event)" (select)="onSelect($event)" [(ngModel)]="selected" [hover]="1"
                   [items]="displayedItems" [path]="'a.b'">
  // If you wish to add custom items, please use it similar to the following code sample.
  // Or leave blank for the default view.
  <ng-template let-item="item" let-index="index" let-isOdd="isOdd" let-isFirst="isFirst" let-isLast="isLast">
    <span>customized {{index}} - {{isFirst}} - {{isLast}} - {{isOdd}} - {{item | json }}</span>
  </ng-template>
</logo-autocomplete>

Export: {{selected | json}}
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
