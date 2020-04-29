import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from '../shared/directives/autofocus.directive';
import { Base64Directive } from '../shared/directives/base64.directive';
import { IsActiveRouteDirective } from '../shared/directives/is-active-route.directive';
import { LastDirective } from '../shared/directives/last.directive';
import { MaskDirective } from '../shared/directives/mask.directive';
import { HTMLParserDirective } from '../shared/directives/parser.directive';
import { VariableDirective } from '../shared/directives/variable.directive';
import { VideoSnapshotDirective } from '../shared/directives/video-snapshot.directive';

const DIRECTIVES = [
  AutofocusDirective,
  Base64Directive,
  IsActiveRouteDirective,
  LastDirective,
  MaskDirective,
  HTMLParserDirective,
  VariableDirective,
  VideoSnapshotDirective,
];

@NgModule({
  declarations: [DIRECTIVES],
  imports: [CommonModule],
  exports: [DIRECTIVES],
})
export class SharedDirectiveModule {
}
