import { NgModule } from '@angular/core';
import { TagsComponent } from './tags.component';

/**
 * Use tags to label, categorize, or organize items using keywords that describe them. Tags can be used as filter chips with remove buttons.
 *
 * It comes with the features below:
 * * Remove button.
 * * Custom CSS Class input.
 * * Size support.
 *
 * @stacked-example(TagsComponent, logo/tags-sample/tags-showcase/tags-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Tags Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/tags -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, TagsModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [TagsComponent],
  imports: [],
  exports: [TagsComponent],
})
export class TagsModule {
}
