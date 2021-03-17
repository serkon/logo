/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { CompilerFactory, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DynamicModule } from '@logo-software/dynamic';

import { MarkdownComponent } from './markdown.component';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

/**
 * Dynamic markdown loader from MD/MDX files and parser for Angular.io projects. Markdown module converts md content text to html styled and formatted text.
 *
 * @stacked-example(Markdown Showcase, logo/markdown-sample/markdown-showcase/markdown-showcase.component)
 *
 * ### Installation
 *
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Markdown Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/markdown -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *   imports: [CommonModule, MarkdownModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [MarkdownComponent],
  imports: [DynamicModule],
  exports: [MarkdownComponent],
})
export class MarkdownModule {
  constructor(@Optional() @SkipSelf() parentModule: MarkdownModule, @Optional() private http: HttpClient) {
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
