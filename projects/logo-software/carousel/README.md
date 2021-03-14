# Carousel Module
The Carousel module is a component for cycling through elements, like a carousel (slideshow).

Click here for [demo](http://design.logo.com.tr/#/docs/components/carousel-module#carouselmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Carousel Module:

  ```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/carousel -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, CarouselModule],
})
export class AppModule {
}
```

### Carousel Component

The carousel is a slideshow for cycling through a series of content,
built with CSS transforms and a bit of JavaScript. It works with a series of images,
text, or custom markup. It also includes support for previous/next controls and indicators.

```html
<logo-carousel [count]="1" [arrow]="true" [dots]="true">
  <div class="slider-item" *ngFor="let item of sliderItems">
     {{item.description}}
  </div>
</logo-carousel>
```
