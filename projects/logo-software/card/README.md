# Card

Card is a content container for text, photos, and actions in the context of a single subject.

Click here for [demo](http://design.logo.com.tr/#/docs/components/card-module#cardmodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Card Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/card -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, CardModule]
})
export class AppModule {
}
```

### Card Component

Cards contain content and actions about a single subject.
Add the below code to your code stack and give initializer parameters.

<sub>app.component.ts</sub>

```html
<logo-card [cardImage]="imagePath" [cssClasses]="css-class-names"></logo-card>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
