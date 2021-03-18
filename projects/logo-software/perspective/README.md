# Perspective Module

The perspective module gives perspective to elements, using the  Perspective feature of the CSS by mouse move size.

Click here for [demo](http://design.logo.com.tr/#/docs/components/perspective-module#perspectivemodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Perspective Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/perspective -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, PerspectiveModule]
})
export class AppModule {
}
```

### Perspective Component

This component accepts HTML items inside then gives perspective to each theme.
Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-perspective
  [threshold]="150"
  [xDegree]="3"
  [yDegree]="3"
  [sensitivity]="50"
  [rotateX]="false"
  [rotateY]="true"
>
  <div class="art-bg-01"></div>
  <div class="art-bg-02"></div>
</logo-perspective>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
