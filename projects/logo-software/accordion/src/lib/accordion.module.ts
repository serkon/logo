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

import { AccordionComponent } from './accordion.component';
import { IsActiveRouteDirective } from './is-active-route.directive';

/**
 * An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them.
 * It is one of many ways you can expose content to users in a progressive manner.
 *
 * @stacked-example(Accordion Showcase, logo/accordion-sample/accordion-showcase/accordion-showcase.component)
 *
 * ### Installation
 *
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Accordion Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/accordion -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *   imports: [CommonModule, AccordionModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AccordionComponent, IsActiveRouteDirective],
  exports: [AccordionComponent],
  providers: [],
})
export class AccordionModule {
  constructor(@Optional() @SkipSelf() parentModule: AccordionModule, @Optional() private http: HttpClient) {
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
