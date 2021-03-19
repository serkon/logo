import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';

/**
 * Modals focus the user’s attention to a window that sits on top of the page content.
 *
 * @stacked-example(ModalComponent, logo/modal-sample/modal-showcase/modal-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Modal Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/modal -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, ModalModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
  ],
  exports: [ModalComponent],
})
export class ModalModule {
}
