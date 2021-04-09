# Wizard Module

An easy-to-use light-weight angular library to handle multi-paths wizards (and simple wizards too) and navigate into
them.

Click here for [demo](http://design.logo.com.tr/#/docs/components/wizard-module#wizardmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Wizard Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/wizard -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import {WizardModule} from '@logo-software/wizard';

@NgModule({
  imports: [CommonModule, WizardModule],
})
export class AppModule {
}
```

### Wizard Component

Wizard library create business flow paths for your users. Add the below code to your code stack and give initializer
parameters.

<sub>app.component.html</sub>

```html

<logo-wizard
  [activeStep]="0"
  [cssClasses]="'my-own-wizard-class'"
  [routing]="true"
  [isVertical]="true"
  (change)="yourChangeTrigger($event)"
  (tabEvent)="yourTabEvent($event)"
>
  <logo-step title="one">content of wizard step one</logo-step>
  <logo-step title="two">content of wizard step two</logo-step>
</logo-wizard>
```

### Footer

Add your own footer contents to the footer element of the wizard. For example:

<sub>app.component.html</sub>

```html
<logo-wizard>
  <logo-step title="one">content of wizard step one</logo-step>
  <div footer>My own footer content</div>
</logo-wizard>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
