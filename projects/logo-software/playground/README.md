# Playground Module

Playground module shows given path inside a iframe. So you can show any component inside in. It will helps you quickly
display component usage in the documents.

Click here for [demo](http://design.logo.com.tr/#/docs/components/playground-module#playgroundmodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Playground Module:

 ```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/playground -s
 ```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, PlaygroundModule]
})
export class AppModule {
}
```

### Playground Component

This component opens the given URL inside the iframe display its content in a sandbox container.
Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-playground
  context='{"title": "Accordion Demo", "button": true}'
  height="400px"
  path="example/logo/accordion-sample/accordion-showcase/accordion-showcase.component"
>
</logo-playground>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
