import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IconsComponent } from './icons.component';

/**
 * Icon Module is used to add icons to Logo Elements Design System guide-based web and mobile applications. Our icons depend on the *Streamline Icons* paid version. For usage, just download and import `scss` to your project main `style.scss` is enough. It is so easy to use.
 *
 * @stacked-example(Icons Showcase, logo/icons-sample/icons-showcase/icons-showcase.component)
 *
 * ### License
 * Our licence placed at [License](http://design.logo.com.tr/assets/guideline/icon/license.pdf) file. Please click and read for usage details.
 *
 * ### Installation
 * There are several ways to install Logo Icons to the project.
 *
 * ###### 1. Font Icon
 * Our icons also can be usable as Font Icon. You can download Font Icon version to your project from [here](http://design.logo.com.tr/assets/guideline/icon/LogoElements-v1.5.1.zip).
 *
 * ###### 2. Bitbucket
 * 1. Download Icons's `scss` file from [Bitbucket](http://stash.logo.com.tr/projects/FD/repos/theme/browse/projects/logo-software/icons/style.scss).
 * 2. Save as "style-file-name.css"
 * 3. Place it to your `assets` folder, or where you want
 * 4. Open your main `css` file.
 * 5. Then add below code for import it to your own css file
 * ```scss
 * @import url("./folder-path/style.css");
 * ```
 *
 * ###### 3. Npm
 * This package is private package so we decide to hold it in our own repository. Other side, our all public npm packages is located at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 *
 * To install Icons Module throught npm:
 *
 * 1. Set your npm registry to Logo Nexus Repository Manager if not [https://dregistry.logo.com.tr/](dregistry.logo.com.tr).
 * ```shell
 * $ npm set registry https://dregistry.logo.com.tr/repository/npm-logofe/
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
