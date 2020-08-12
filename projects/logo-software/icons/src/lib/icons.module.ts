import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IconsComponent } from './icons.component';


/**
 * Icon module uses for add icons to project
 * Just import `scss` to your project main `style.scss`
 *
 * __Usage Example__
 *
 * <sub>style.scss</style>
 * ```scss
 * @import "~@logo-software/icons/style";
 * ```
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Cursor Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/icons -s
 * ```
 */
@NgModule({
  declarations: [IconsComponent],
  imports: [CommonModule, FormsModule],
  exports: [IconsComponent],
})
export class IconsModule {
}
