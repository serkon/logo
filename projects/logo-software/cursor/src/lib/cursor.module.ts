import { NgModule } from '@angular/core';
import { CursorComponent } from './cursor.component';

/**
 * Cursor module uses customize to the cursor
 *
 * @stacked-example(Cursor Showcase, logo/cursor-sample/cursor-showcase/cursor-showcase.component)
 *
 * ### Installation
 *
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Cursor Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/cursor -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 *  @NgModule({
 *   imports: [CommonModule, CursorModule]
 * })
 *  export class AppModule {
 * }
 *  ```
 */
@NgModule({
  declarations: [CursorComponent],
  imports: [],
  exports: [CursorComponent],
})
export class CursorModule {
}
