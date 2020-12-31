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
 * This package is private package so we decide to hold it in our own repository. Other side, our all public npm packages is located at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 *
 * To install Icons Module throught npm:
 *
 * 1. Set your npm registry to Logo Nexus Repository Manager if not [https://dregistry.logo.com.tr/](dregistry.logo.com.tr).
 * ```shell
 * $ npm set registry https://dregistry.logo.com.tr/repository/npm-group/
 * ```
 * 2. Please login for authentication, if you are not signed in.
 * ```shell
 * $ npm login
 * ```
 * 3. At your project call `npm install` command. This below command will create `node_modules` folder at same level path.
 * ```shell
 * $ npm install @logo-software/icons -s
 * ```
 * 4. Then add below code for import it to your own scss file
 * ```scss
 * @import "./node_modules/@logo-software/icons/style";
 * ```
 */
@NgModule({
  declarations: [IconsComponent],
  imports: [CommonModule, FormsModule],
  exports: [IconsComponent],
})
export class IconsModule {
}
