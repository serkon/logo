/**
 * @license
 * Copyright Logo Yazılım. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Logo Yazılım.
 * Any reproduction of this material must contain this notice.
 */

export interface ToastAction {
  display: string,
  event: (value?: any) => void
}

export enum MessageTypes {
  ERROR = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFORMATION = 'info',
}

export class Toast {
  public type?: MessageTypes;
  public soundType?: MessageTypes | string;
  public message?: string;
  public width?: 'small' | 'medium' | 'large' | 'big' | 'auto';
  public autoClose ? = true;
  public audio?: HTMLAudioElement;
  public actions?: ToastAction[];

  constructor(item: Toast) {
    this.type = item.type || MessageTypes.ERROR;
    this.soundType = item.soundType || item.type || MessageTypes.ERROR;
    this.message = item.message || null;
    this.width = item.width || 'auto';
    this.autoClose = typeof item.autoClose !== 'undefined' ? item.autoClose : true;
    this.audio = item.audio || null;
    this.actions = item.actions || null;
  }
}