/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LinksModule } from '@logo-software/links';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

// https://stackblitz.com/edit/angular-tabs-example?file=app%2Ftabs%2Ftabs.component.ts
/**
 * Tabs are organized content into separate views where only one view can be visible at a time.
 * Tabs are used to quickly navigate between views within the same context.
 * All tabs have own router.
 *
 * @stacked-example(Tabs Showcase, logo/tabs-sample/tabs-showcase/tabs-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Tabs Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/tabs -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * <sub>app.module.ts</sub>
 *
 * ```typescript
 * @NgModule({
 *   imports: [TabsModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  imports: [CommonModule, RouterModule, LinksModule],
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent],
})
export class TabsModule {
}
