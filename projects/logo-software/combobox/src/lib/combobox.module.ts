import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@logo-software/core';

import { ComboboxComponent } from './combobox.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { TagsModule } from '@logo-software/tags';

/**
 * A combo box is a commonly used graphical user interface widget (or control).
 * Traditionally, it is a combination of a drop-down list or list box and a single-line editable textbox,
 * allowing the user to either type a value directly or select a value from the list.
 *
 * @stacked-example(Combobox Showcase, logo/combobox-sample/combobox-showcase/combobox-showcase.component)
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Combobox Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/combobox -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *   imports: [CommonModule, ComboboxModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [ComboboxComponent, MultiplePipe],
  imports: [FormsModule, CommonModule, CoreModule, TagsModule],
  exports: [ComboboxComponent],
})
export class ComboboxModule {
}
