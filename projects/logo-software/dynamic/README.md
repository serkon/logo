# Dynamic

This module is ___Experimental___ status.

``` bash
# If you plan to use this module you have to accept all risk to usage.
# your project must be compile the project without aot and buildOptimizer disabled

ng build --prod --aot=false --buildOptimizer=false
```

@TODO: https://itnext.io/building-an-aot-friendly-dynamic-content-outlet-in-angular-c2790195cb94

Dynamic module installer main goal is to dynamically load components from string and render them as a web user interface.

Click here for [demo](http://design.logo.com.tr/#/docs/components/dynamic-module#dynamicmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Dynamic Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/dynamic -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, DynamicModule],
})
export class AppModule {
}
```

### Dynamic Component

The dynamic module accepts two inputs, one of them is your Module list and the other is your template string.
So, these components load your modules and run your templates inside them.
Add the below code to your code stack and give initializer parameters.

<sub>app.component.ts</sub>

```ts
import { Component, NgModule } from '@angular/core'; *
import { PlaygroundModule } from '@logo-software/playground';
import { BreadcrumbModule } from '@logo-software/breadcrumb';

@Component({
  selector: 'logo-dynamic-showcase',
  templateUrl: './dynamic-showcase.component.html',
  styleUrls: ['./dynamic-showcase.component.scss'],
})
export class DynamicShowcaseComponent {
 imports = [PlaygroundModule, BreadcrumbModule];
 text = `
   <logo-playground path="#/logo/button-sample/button-showcase/button-showcase.component" context='{"title": "Button Demo", "button": true}' ></logo-playground>
   <logo-breadcrumb [breadcrumb]="[{name:'Home', link: '/'}, {name:'Products', link: '/products'}, {name: 'Potato'}]" [isLight]="false" [size]="'medium'"></logo-breadcrumb>
 `;
}
```
<sub>app.component.html</sub>

```angular2html
<logo-dynamic imports="imports" context="text"></logo-drawer>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
