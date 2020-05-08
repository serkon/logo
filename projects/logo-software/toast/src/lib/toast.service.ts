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
import { MessageTypes, Toast } from './toast';

/**
 * Toast Service
 * @property {Boolean} [desktop='false'] - This property for display toast popup as small font size
 * @property {String} [width="large"] - There are four type width: 'small' | 'medium' | 'large' | 'big' you can set one.
 * @property {Boolean} [closeFocus=true] - When toast popup open will be focused to close button if it set to true.
 *
 * @example
 * // set some options if want to change default options:
 * this.notificationService.justSound = true;
 * this.notificationService.width = 'medium';
 * this.notificationService.desktop = false;
 *
 * let notificationService = new ToastService();
 * notificationService.show({message: '', title: ''});
 *
 * // it can be also define some properties using options method at once
 * this.notificationService.options({justSound: true, width: 'medium', desktop: true});
 * this.notificationService.status(404);
 */
@Injectable()
export class ToastService {
  public watch: Subject<Toast> = new Subject<Toast>();
  public soundType: string;
  public closeAction: null | Function = null;
  public closeFocus = false;
  public autoCloseTimeout = 3000; // TODO change autoclose
  public width: 'small' | 'medium' | 'large' | 'big' | 'auto' = 'auto';
  public soundCompleteWatch = new Subject();
  public toasts: Toast[] = [];
  public soundEnable = false;

  show(item: Toast) {
    const toast = new Toast(item);
    this.toasts.push(toast);
    this.watch.next(toast);
    if (!toast.message) {
      console.error(`No message property defined for notification: ${toast}`);
    }
  }

  public error(message: string, options?: Toast) {
    this.show({...{message: message, type: MessageTypes.ERROR, autoClose: false}, ...options});
  }

  public success(message: string, options?: Toast) {
    this.show({...{message: message, type: MessageTypes.SUCCESS, autoClose: true}, ...options});
  }

  public warning(message: string, options?: Toast) {
    this.show({...{message: message, type: MessageTypes.WARNING, autoClose: true}, ...options});
  }

  public information(message: string, options?: Toast) {
    this.show({...{message: message, type: MessageTypes.INFORMATION, autoClose: true}, ...options});
  }

  public list() {
    return this.toasts;
  }

  public options(value: any) {
    // _.merge(this, value);
  }

  public remove(toast: Toast) {
    const item = this.toasts.indexOf(toast);
    this.toasts.splice(item, 1);
  }

  public reset() {
    this.closeAction = null;
  }
}
