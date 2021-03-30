# Badge Module

A badge is a visual indicator for informational values such as tallies, scores and tags. It comes many features

* Icon Support
* Icon Position Support
* Size Support
* Logo Theme Support

Click here for [demo](http://design.logo.com.tr/#/docs/components/badge-module#badgemodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Badge Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/badge -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import {BadgeModule} from '@logo-software/badge';

@NgModule({
  imports: [CommonModule, BadgeModule],
})
export class AppModule {
}
```

### Badge Component

Badges visualize and make little information cracks to readable assets. Add the below code to your code stack and give
initializer parameters.

<sub>app.component.html</sub>

```html
<logo-badge
  [label]="'Some kind of badge text'"
  [theme]="'primary'"
  [cssClasses]="'my-own-logo-badge'"
  [size]="'large'"
  [iconPosition]="'left'"
  [icon]="'info'"
>
</logo-badge>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
