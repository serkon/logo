# Timepicker Module

Timepicker helps users select and set a specific time in your timesheet in 24-hour format. It comes many features

Click here for [demo](http://design.logo.com.tr/#/docs/components/timepicker-module#timepickermodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Timepicker Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/timepicker -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import {TimepickerModule} from '@logo-software/timepicker';

@NgModule({
  imports: [TimepickerModule],
})
export class AppModule {
}
```

### Timepicker Component

The Timepicker is the component of itself. Provides a proxy to Timepicker options as well as custom picker options. Add
the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-timepicker
 [id]="'myLogoTimer'"
 [size]="'medium'"
 [iconPosition]="'left'"
 [cssClasses]="'my-own-theme-css'"
>
</logo-timepicker>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
