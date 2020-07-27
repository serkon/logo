import { NgModule } from '@angular/core';
import { LinkComponent } from './link.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Link module uses when links to internal or external url
 * Just import it to your project of @NgModule' import section
 *
 *
 * __Usage Example__
 *
 * ```typescript
 * @NgModule({
 *   ...
 *   imports: [CommonModule, LinkModule],
 *   ...
 * })
 * export class AppModule {
 * }
 * ```
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Paging Module:
 *
 *   ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/link -s
 * ```
 */
@NgModule({
  declarations: [LinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [LinkComponent],
})
export class LinkModule {
}
