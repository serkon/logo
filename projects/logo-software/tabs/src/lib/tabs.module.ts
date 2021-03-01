import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LinksModule } from '@logo-software/links';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

/**
 * https://stackblitz.com/edit/angular-tabs-example?file=app%2Ftabs%2Ftabs.component.ts
 * Tabs organize content into separate views where only one view can be visible at a time. Tabs are used to quickly navigate between views within the same context.
 * Each tabs has own router.
 * __Usage Example__
 * <sub>app.module.ts</sub>
 * ```typescript
 * @NgModule({
 *   ...
 *   imports: [TabsModule],
 *   ...
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
