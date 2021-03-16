# Combobox Module

A combo box is a commonly used graphical user interface widget (or control).
Traditionally, it is a combination of a drop-down list or list box and a single-line editable textbox,
allowing the user to either type a value directly or select a value from the list.

Click here for [demo](http://design.logo.com.tr/#/docs/components/combobox-module#comboboxmodule)

### Installation
All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Combobox Module:

  ```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/combobox -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, ComboboxModule],
})
export class AppModule {
}
```

### Combobox component

A ComboBox displays a text box combined with a ListBox, which enables the user to select items
from the list or enter a value for filtering this list then can select an item.

```html
<logo-combobox (filter)="onFiltered($event)" (select)="onSelect($event)" [(ngModel)]="selected" [hover]="1" [items]="displayedItems" [path]="'a.b'">
  // If you wish to add custom items, please use it similar to the following code sample.
  // Or leave blank for the default view.
  <ng-template let-item="item" let-index="index" let-isOdd="isOdd" let-isFirst="isFirst" let-isLast="isLast">
    <span>customized {{index}} - {{isFirst}} - {{isLast}} - {{isOdd}} - {{item | json }}</span>
  </ng-template>
</logo-combobox>

Export: {{selected | json}}
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
