/**
 * @license
 * Copyright Logo Yazılım. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Logo Yazılım.
 * Any reproduction of this material must contain this notice.
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast, ToastMessageTypes } from './toast';

/**
 * Toast Service used for create Toast Message. A toast is a lightweight, ephemeral notice from an application in direct response to a user's action.
 *
 * __Usage Example__
 *
 * <sub>any.component.ts</sub>
 * ```typescript
 * @Component({
 *   selector: 'logo-toast-sample',
 *   templateUrl: './toast-showcase.component.html',
 *   styleUrls: ['./toast-showcase.component.scss'],
 * })
 *  export class ToastShowcaseComponent {
 *   constructor(private toastService: ToastService) {
 *      this.toastService.error('message content goes here'); // error message
 *      this.toastService.warning('message content goes here'); // warning message
 *      this.toastService.information('message content goes here'); // info message
 *      this.toastService.success('message content goes here'); // success message
 *   }
 * }
 * ```
 */
@Injectable()
export class ToastService {
  public watch: Subject<Toast> = new Subject<Toast>();
  public soundType: string = '';
  /**
   * When closeAction function given, this method will be triggered before the close button clicked.
   */
  public closeAction: null | (() => void) = null;
  /**
   * Close focus value is true. It will focus when toast message appears.
   */
  public closeFocus = true;
  public autoCloseTimeout = 3000; // TODO change autoclose
  public soundCompleteWatch = new Subject();
  public toasts: Toast[] = [];
  /**
   * Sound enable is false. If set true default sound will be played.
   */
  public soundEnable = false;

  /**
   * This will shows toast defined Toast property.
   * @param item
   */
  show(item: Toast) {
    const toast = new Toast(item);
    this.toasts.push(toast);
    this.watch.next(toast);
    if (!toast.message) {
      console.error(`No message property defined for notification: ${toast}`);
    }
  }

  /**
   * This shows error toast message
   * @param message
   * @param options
   */
  public error(message: string, options?: Toast) {
    this.show({...{message, type: ToastMessageTypes.ERROR, autoClose: false}, ...options});
  }

  /**
   * This will shows success type toast message
   * @param message
   * @param options
   */
  public success(message: string, options?: Toast) {
    this.show({...{message, type: ToastMessageTypes.SUCCESS, autoClose: true}, ...options});
  }

  /**
   * This will shows warning type toast message
   * @param message - string
   * @param options - Toast
   */
  public warning(message: string, options?: Toast) {
    this.show({...{message: message, type: ToastMessageTypes.WARNING, autoClose: true}, ...options});
  }

  /**
   * This will shows information type toast message
   * @param message
   * @param options
   */
  public information(message: string, options?: Toast) {
    this.show({...{message: message, type: ToastMessageTypes.INFORMATION, autoClose: true}, ...options});
  }

  /**
   * Returns All toast message
   */
  public list() {
    return this.toasts;
  }

  public remove(toast: Toast) {
    const item = this.toasts.indexOf(toast);
    this.toasts.splice(item, 1);
  }

  public reset() {
    this.closeAction = null;
  }
}
