# Image Slider Module

Image Slider is a image viewer library for cycling through a series of images. It also includes support for
previous/next controls and thumbnails.

* It comes with the features below:
* Thumbnail support.
* On Image change, image specific output.
* Auto scrollable thumbnails.
* Mobile support.

Click here for [demo](http://design.logo.com.tr/#/docs/components/image-slider-module#imageslidermodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Image Slider Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/image-slider -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import {ImageSliderModule} from '@logo-software/image-slider';

@NgModule({
  imports: [CommonModule, ImageSliderModule],
})
export class AppModule {
}
```

### Image Slider Component

Image Slider is a key to product showcases. With Image Slider Component you can easily add simple image gallery your
page. Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html

<logo-image-slider
  [media]="items"
  [texts]="captions"
  (onItemChange)="sampleChangeEvent($event)"
>
</logo-image-slider>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
