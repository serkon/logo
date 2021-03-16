# Cursor

Cursor module uses customize to the cursor

Click here for [demo](http://design.logo.com.tr/#/docs/components/cursor-module#cursormodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Cursor Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/accordion -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, AccordionModule]
})
export class AppModule {
}
```

### Cursor Component

Cursor component changes default cursor to animated nested circle cursor.
There are two circle. The Biggest one is track the default cursor position with animation. Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-cursor timeDuration=400 [targets]=['.cursor', 'button', 'a']></logo-cursor>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
