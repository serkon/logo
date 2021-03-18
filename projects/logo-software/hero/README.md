# Hero Module

Hero module is a lightweight, flexible component that can optionally extend the first viewable section to showcase key
marketing messages on your site.

* It comes with the features below:
* Custom CSS Class support.
* Container class support.
* Set background image dynamically.
* Custom inner content design.
* Overlay support between content and background.

Click here for [demo](http://design.logo.com.tr/#/docs/components/hero-module#heromodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Hero Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/hero -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import {HeroModule} from '@logo-software/hero';

@NgModule({
 imports: [CommonModule, HeroModule],
})
export class AppModule {
}
```

### Hero Component

Hero areas are key points for marketing and catch the user attentions. With Hero Component you can easily add hero model
to your page. Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-hero
  [containerStatus]="true"
  [bgImage]="'https://cdn-nq.logo.com.tr/assets/images/banners/banner-cover-muhasebe-web.jpg'"
  [cssClasses]="'my-hero-area'"
>
  <!-- Your content goes here. Below code is a sample of usage. -->
   <div class="content">
     <h1>Welcome to my page</h1>
     <p>My description of marketing</p>
   </div>
 </logo-hero>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
