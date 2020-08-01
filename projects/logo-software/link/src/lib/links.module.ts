import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LinksComponent } from './links.component';
import { LinkComponent } from './link.component';

/**
 * Link module uses when links to internal or external url
 * Just import it to your project of @NgModule' import section
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
 * To install Link Module:
 *
 *   ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/link -s
 * ```
 */
@NgModule({
  declarations: [LinksComponent, LinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [LinksComponent, LinkComponent],
})
export class LinksModule {
}
