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
