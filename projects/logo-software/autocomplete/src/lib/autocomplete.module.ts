import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@logo-software/core';
import { TagsModule } from '@logo-software/tags';

import { AutocompleteComponent } from './autocomplete.component';
import { MultiplePipe } from './pipe/multiple.pipe';

/**
 * The autocomplete component is an input field that provides selectable suggestions as a merchant types into it.
 * It allows merchants to quickly search through and select from large collections of options.
 *
 * @stacked-example(Autocomplete Showcase, logo/autocomplete-sample/autocomplete-showcase/autocomplete-showcase.component)
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Autocomplete Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/autocomplete -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *   imports: [CommonModule, AutocompleteModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [AutocompleteComponent, MultiplePipe],
  imports: [FormsModule, CommonModule, CoreModule, TagsModule],
  exports: [AutocompleteComponent],
})
export class AutocompleteModule {
}
