# Accordion Module

An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them.
It is one of many ways you can expose content to users in a progressive manner.

Click here for [demo](http://design.logo.com.tr/#/docs/components/accordion-module#accordionmodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Accordion Module:

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

### Accordion Component

Accordions are useful when you want to toggle between hiding and showing large amount of content. Add the below code to your code stack and give initializer parameters.

<sub>app.component.ts</sub>

```html
<logo-accordion [items]="items" [start]="0" [iconClasses]=""></logo-accordion>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
