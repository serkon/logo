import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IconsComponent } from './icons.component';

/**
 * Icon module uses for add icons to project.
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
 * One SCSS file is enough for get all 500 icons. There are two way to install Logo Icons to the project.
 * 1. Download Icons's `SCSS` from [https://github.com/logo-group/logo-elements/blame/master/projects/logo-software/icons/style.scss](GitHub).
 * 2. Install it to project using through NPM Package Manager
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Icons Module:
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
