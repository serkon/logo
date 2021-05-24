/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { IsActiveRouteDirective } from './is-active-route.directive';
import { ApplicationTreeComponent } from './application-tree.component';
import { FormsModule } from '@angular/forms';

/**
 * Application tree module represents a hierarchical view of applications, where each item can have a number of subitems.
 * Click on the arrow(s) to open or close the tree branches.
 *
 * @stacked-example(Application Tree Showcase, logo/leftbar-sample/leftbar-showcase/leftbar-showcase.component)
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Tree Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/application-tree -s
 * ```
 * Then add ApplicationTreeModule to @NgModule `imports` section
 * ```typescript
 * @NgModule({
 *   ...
 *   imports: [CommonModule, ApplicationTreeModule],
 *   ...
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ApplicationTreeComponent, IsActiveRouteDirective],
  exports: [ApplicationTreeComponent],
  providers: [],
})
export class ApplicationTreeModule {
  constructor(@Optional() @SkipSelf() parentModule: ApplicationTreeModule, @Optional() private http: HttpClient) {
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
