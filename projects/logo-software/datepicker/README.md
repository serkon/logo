# Datepicker Module

Date pickers let users select a date or range of dates. They should be suitable for the context in which they appear.

Click here for [demo](http://design.logo.com.tr/#/docs/components/datepicker-module#datepickermodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Datepicker Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/datepicker -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import { DatepickerModule } from '@logo-software/datepicker';

@NgModule({
  imports: [DatepickerModule],
})
export class AppModule {
}
```

### Datepicker Component

The DatePicker components itself. Provides a proxy to customize logo datepicker library options. Add the below code to
your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html

<logo-datepicker
        [reference]="'mySecondDatepickerForRange'"
        [placeholder]="'Placeholder of my logo datepicker'"
        [regexp]="regexp"
        [disabled]="false"
        [time]="true"
        [dateValue]="10.01.2021"
        [min]="10.01.2000"
        [max]="10.01.2099"
        [target]="'mySecondDatepickerForRange'"
        [iconPosition]="'left'"
        [size]="'medium'"
        [cssClasses]="'my-own-datepicker-class'"
        (valueChange)="yourChangeTrigger($event)"
>
</logo-datepicker>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
