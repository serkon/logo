# Switch Module

Switch toggle provides display checked/unchecked (On/Off) state on the button.Comes with the following properties.

* Color
* Size
* Shape

Click here for [demo](http://design.logo.com.tr/#/docs/components/switch-module#switchmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Header Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/switch -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
 imports: [CommonModule, SwitchModule],
})
export class AppModule {
}
```

### Switch Component

A switch is a simple component used for activating one of two predefined options. Commonly used as an on/off button.

<sub>app.component.html</sub>

```html
<logo-switch
  class="medium"
  [theme]="primary"
  [isDisabled]="false"
  [isRounded]="false"
>
</logo-switch>

```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
