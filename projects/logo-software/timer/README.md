# Timer Module

Timer helps developer to set a specific time for their web apps and doSomething after completed.

Click here for [demo](http://design.logo.com.tr/#/docs/components/timer-module#timermodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Timer Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/timer -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import {TimerModule} from '@logo-software/timer';

@NgModule({
  imports: [CommonModule, TimerModule],
})
export class AppModule {
}
```

### Timer Component

Timer library lets your users to know their time in your app. Add the below code to your code stack and give initializer
parameters.

<sub>app.component.html</sub>

```html

<logo-timer
  [timeInMs]="1234567"
  [id]="'myLogoTimer'"
  [title]="'Estimated Time'"
  [cssClasses]="'my-logo-timer-theme'"
  [theme]="'primary'"
  [isCountdown]="true"
  [showIcon]="true"
  [language]="{days: 'Gün', hours: 'Saat', minutes: 'Dk', seconds: 'Sn'}"
  [showProgressBar]="true"
  (onTimeCompleted)="sampleOnTimeEnd($event)"
>
</logo-timer>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
