import { Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule } from '@angular/core';
import { PlaygroundComponent } from './playground.component';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule],
  providers: [
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]},
  ],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {
}
