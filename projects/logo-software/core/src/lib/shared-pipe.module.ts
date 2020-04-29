import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPipe } from '../shared/pipe/format.pipe';
import { OrderPipe } from '../shared/pipe/order.pipe';
import { SafeHTMLPipe } from '../shared/pipe/safe-html.pipe';

const PIPES = [FormatPipe, OrderPipe, SafeHTMLPipe];

@NgModule({
  declarations: [PIPES],
  imports: [CommonModule],
  exports: [PIPES],
})
export class SharedPipeModule {
}
