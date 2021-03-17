# Header Module

Header module adds a header area to the top of the landing page and manages its content. Header module supports responsive web design.
It comes many features

* theme
* scroll spy
* mobilized
* alignment (right, left, center)

Click here for [demo](http://design.logo.com.tr/#/docs/components/header-module#headermodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Header Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/header -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
 imports: [CommonModule, HeaderModule],
})
export class AppModule {
}
```

### Header Component

Headers are navigation components that display information and actions relating to the current screen. Add the below code to your code stack and give initializer parameters.
Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-header
 [containerStatus]="true"
 [defaultTheme]="headerTheme.START"
 [isMobilized]="true"
 [menuPosition]="'left'"
 [scrollPoint]="75"
 [scrollSpy]="true"
 [scrolledTheme]="headerTheme.SCROLL"
 [watchElement]="'body'"
>
  <!-- Your content goes here. Below code is a sample of usage. -->
  <div class="section-main">
    <logo-link [classes]="'ghost large'" [url]="'/products'">Products</logo-link>
    <logo-link [classes]="'ghost large'" [fragment]="'solutions'" [url]="'/'">Solutions</logo-link>
    <logo-link [classes]="'ghost large'" [url]="'/info/about'">About Us</logo-link>
    <logo-link [classes]="'ghost large'" [url]="'/blog'">Blog</logo-link>
    <logo-link [classes]="'ghost large'" [url]="'/contact'">Contact</logo-link>
  </div>
</logo-header>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
