/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { CompilerFactory, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PlaygroundModule } from '@logo-software/playground';
import { DynamicModule } from '@logo-software/dynamic';

import { MarkdownComponent } from './markdown.component';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [MarkdownComponent],
  imports: [HttpClientModule, PlaygroundModule, DynamicModule],
  exports: [MarkdownComponent],
})
export class MarkdownModule {
}
