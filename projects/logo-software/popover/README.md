# Popover Module

Powerful popover library, which provides the best UX for your users. It shows the small modals over the content

It comes with the features below:

* Logo theme support.
* Search support.
* Service based on-the-go support.

Click here for [demo](http://design.logo.com.tr/#/docs/components/popover-module#popovermodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Popover Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/popover -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import { PopoverModule } from '@logo-software/popover';

@NgModule({
  imports: [PopoverModule],
})
export class AppModule {
}
```

### Popover Component

Overlay popover container. Renders provided content inside. You can set options of your popover in the component. Add
the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-popover
 [id]="'myLogoPopover'"
 [hasSearch]="true"
 [isBackClick]="true"
 [cssClasses]="'my-own-theme-css'"
>
 My own content in my own popover.
</logo-popover>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
