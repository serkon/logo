# Leftbar Module

Leftbar is part of the Logo Elements Environment. This library is a navigational part of the apps and shared by products
within a platform. It provides a common set of interaction patterns that persist between and across products also
standartization of navigation between apps and user information presentation.

It comes with the features below:

* Configurable by Restful API.
* Slim mode.
* Customizable menu area.
* Shortcut support

Click here for [demo](http://design.logo.com.tr/#/docs/components/leftbar-module#leftbarmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Leftbar Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/leftbar -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import { LeftbarModule } from '@logo-software/leftbar';

@NgModule({
  imports: [CommonModule, LeftbarModule],
})
export class AppModule {
}
```

### Leftbar Component

Leftbar is the bound between apps. With leftbar component switching between apps feels like you are in the same
environment even the apps are different. Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-leftbar
 (onInit)="sampleUserDataGet()"
 (onAddShortCut)="sampleAddShortcut()"
 (onAppSelected)="sampleAppAction($event)"
 (onHomeButton)="sampleHomeAction()"
 (onSettingsButton)="sampleSettingsAction()"
 (onTenantSelected)="sampleTenantAction($event)"
 (onInfoRequest)="sampleInfoReqAction($event)"
 (onSearch)="sampleSearchAction($event)"
>
   <p>CUSTOM MENU</p>
</logo-leftbar>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
