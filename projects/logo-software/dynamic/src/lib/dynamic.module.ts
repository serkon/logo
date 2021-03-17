/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { DynamicComponent } from './dynamic.component';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

/**
 * This module is ___Experimental___ status.
 *
 * ``` bash
 * # If you plan to use this module you have to accept all risk to usage.
 * # your project must be compile the project without aot and buildOptimizer disabled
 *
 * ng build --prod --aot=false --buildOptimizer=false
 * ```
 *
 * @ TODO: https://itnext.io/building-an-aot-friendly-dynamic-content-outlet-in-angular-c2790195cb94
 *
 * Dynamic module installer main goal is to dynamically load components from string and render them as a web user interface.
 *
 * @stacked-example(Drawer Showcase, logo/dynamic-sample/dynamic-showcase/dynamic-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Dynamic Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/dynamic -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *   imports: [CommonModule, DynamicModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [DynamicComponent],
  imports: [],
  providers: [
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]},
  ],
  exports: [DynamicComponent],
})
export class DynamicModule {
}
