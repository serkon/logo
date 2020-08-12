import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LinksComponent } from './links.component';
import { LinkComponent } from './link.component';

/**
 * Link module creates links to internal or external URL for Angular.io application.
 *
 * ### Installation
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Link Module:
 *
 * ```bash$ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/links -s
 * ```
 *
 * Just import it to your project of @NgModule' import section.
 *
 * ```typescript
 * @NgModule({
 * ... imports: [CommonModule, LinksModule], ...})
 * export class AppModule {}
 * ```
 */
@NgModule({
  declarations: [LinksComponent, LinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [LinksComponent, LinkComponent],
})
export class LinksModule {
}
