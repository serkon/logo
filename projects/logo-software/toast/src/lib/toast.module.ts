/**
 * @license
 * Copyright Logo Yazılım. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Logo Yazılım.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast.component';

/**
 * Toast messages inform users of a process that an app has performed or will perform.
 * They appear temporarily, towards the right top of the screen.
 * They shouldn’t interrupt the user experience, and they don’t require user input to disappear.
 * Optionally, it accepts options from outside.
 *
 * __Usage Example__
 *
 * <sub>App.component.html</sub>
 *
 * ```typescript
 * import { BrowserModule } from '@angular/platform-browser';
 * import { HttpClientModule } from '@angular/common/http';
 * import { NgModule } from '@angular/core';
 *
 * import { AppRoutingModule } from './app-routing.module';
 * import { AppComponent } from './app.component';
 * import { ToastModule, ToastService } from '@logo-software/toast';
 *
 * @NgModule({
 *  declarations: [AppComponent],
 *  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ToastModule],
 *  providers: [ToastService],
 *  bootstrap: [AppComponent],
 * })
 *  export class AppModule {
 * }
 * ```
 */
@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent],
  exports: [ToastComponent],
})
export class ToastModule {
}
