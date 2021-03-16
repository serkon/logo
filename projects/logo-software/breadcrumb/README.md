# Breadcrumb

A breadcrumb navigation provide links back to each previous page the user navigated through, and shows the user's current location in a website.

Click here for [demo](http://design.logo.com.tr/#/docs/components/breadcrumb-module#breadcrumbmodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Breadcrumb Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/breadcrumb -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, BreadcrumbModule]
})
export class AppModule {
}
```

### Breadcrumb Component

Breadcrumbs mark and communicate a user's location in the product. Add the below code to your code stack and give initializer parameters.

<sub>app.component.ts</sub>

```html
<logo-breadcrumb [breadcrumb]="items" [size]="'medium'" [isLight]="true" [cssClasses]="css-class-name"></logo-breadcrumb>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
