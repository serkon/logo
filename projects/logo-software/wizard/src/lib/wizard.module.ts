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

import { WizardComponent } from './wizard.component';
import { ItemComponent } from './item.component';

/**
 * An easy-to-use light-weight angular library to handle multi-paths wizards (and simple wizards too) and navigate into them.
 *
 * @stacked-example(WizardComponent, logo/wizard-sample/wizard-showcase/wizard-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Wizard Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/wizard -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * import { WizardModule } from '@logo-software/wizard';
 *
 * @NgModule({
 *  imports: [CommonModule, WizardModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [WizardComponent, ItemComponent],
  imports: [CommonModule, RouterModule, LinksModule],
  exports: [WizardComponent, ItemComponent],
})
export class WizardModule {
}
