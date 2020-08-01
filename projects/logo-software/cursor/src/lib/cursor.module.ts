import { NgModule } from '@angular/core';
import { CursorComponent } from './cursor.component';

/**
 * Customized cursor component
 */

/**
 * Cursor module uses customize to the cursorç
 * Just import it to your project of @NgModule' import section
 *
 * __Usage Example__
 *
 * ```typescript
 * @NgModule({
 *   ...
 *   imports: [CommonModule, CursorModule],
 *   ...
 * })
 * export class AppModule {
 * }
 * ```
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Cursor Module:
 *
 *   ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/cursor -s
 * ```
 */
@NgModule({
  declarations: [CursorComponent],
  imports: [],
  exports: [CursorComponent],
})
export class CursorModule {
}
