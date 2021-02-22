import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LinksModule } from '@logo-software/links';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

/**
 * https://stackblitz.com/edit/angular-tabs-example?file=app%2Ftabs%2Ftabs.component.ts
 */
@NgModule({
  imports: [CommonModule, RouterModule, LinksModule],
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent],
})
export class TabsModule {
}
