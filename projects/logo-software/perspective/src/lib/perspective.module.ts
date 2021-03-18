import { NgModule } from '@angular/core';
import { PerspectiveComponent } from './perspective.component';

/**
 * The perspective module gives perspective to elements, using the  Perspective feature of the CSS by mouse move size.
 *
 * @stacked-example(Perspective Showcase, logo/perspective-sample/perspective-showcase/perspective-showcase.component)
 *
 * ### Installation
 *
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Perspective Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/perspective -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, PerspectiveModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [PerspectiveComponent],
  imports: [],
  exports: [PerspectiveComponent],
})
export class PerspectiveModule {
}
