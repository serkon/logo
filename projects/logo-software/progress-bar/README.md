# Progress Bar Module

A progress bar shows the user where they are along the steps of their process journey. It comes many features

Click here for [demo](http://design.logo.com.tr/#/docs/components/progress-bar-module#progressbarmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Progress Bar Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/progress-bar -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import { ProgressBarModule } from '@logo-software/progress-bar';

@NgModule({
  imports: [CommonModule, ProgressBarModule],
})
export class AppModule {
}
```

### Progress Bar Component

Progress Bar visualize task completion status. Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-progress-bar
  [size]="'small'"
  [theme]="'primary'"
  [cssClasses]="'my-logo-progress-bar'"
  [complete]="500"
  [current]="sampleCurrent"
  [isProgress]="false"
  [isInWait]="false"
>
</logo-progress-bar>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
