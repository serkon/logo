/**
 * @license
 * Copyright Logo Yazılım. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Logo Yazılım.
 * Any reproduction of this material must contain this notice.
 */

/**
 * ToastAction used define Toast Message actions
 *
 * __Usage Example__
 *
 * ```typescript
 * this.toastService.show({
 *     type: ToastMessageTypes.ERROR,
 *     message: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. , ${this.counter++} `,
 *     autoClose: false,
 *     width: 'small',
 *     actions: [
 *       {display: 'accept', event: (toast) => console.log(toast)},
 *       {
 *         display: 'close', event: (data) => {
 *           return new Promise(resolve => {
 *             let counter = 0;
 *             const interval = window.setInterval(() => {
 *               counter++;
 *               if (counter === 10) { // count to ten then close toast message
 *                 window.clearInterval(interval);
 *                 resolve('message goes here');
 *               }
 *             }, 100);
 *           });
 *         },
 *       }],
 *   });
 * ```
 */
export interface ToastAction {
  /**
   * this props define the display text of the action button
   */
  display: string,
  /**
   * event is a define an action when button was clicked
   * @param value
   */
  event: (value?: any) => void
}

/**
 * Message Types will be show to user. There are four type message exists. A toast can show one of the following states:
 *
 * * __Error:__ `ToastMessageTypes.ERROR` - when a user completes an action, but system-related issues prevent the action to be truly executed.
 * * __Informational:__ `ToastMessageTypes.SUCCESS` - when a user completes an action, but there are some additional info to be shown.
 * * __Success:__ `ToastMessageTypes.WARNING` - when a user completes/executes an action.
 * * __Warning:__ `ToastMessageTypes.INFORMATION` - when a user cannot complete an action due to external factors (e.g. permission) rather than something they can fix right away (e.g. form error).
 */
export enum ToastMessageTypes {
  /**
   * Shows red toast message
   */
  ERROR = 'danger',
  /**
   * Shows green toast message
   */
  SUCCESS = 'success',
  /**
   * Shows orange toast message
   */
  WARNING = 'warning',
  /**
   * Shows blue toast message
   */
  INFORMATION = 'info',
}

/**
 * Toast model
 */
export class Toast {
  /**
   * Message types `'error' | 'success' | 'info' | 'warning'`
   * It changes color of the toast message
   */
  public type?: ToastMessageTypes;
  /**
   * Sound type is same as MessageTypes. It also accept string value for custom sound.
   * If it set to 'sample-sound-name' Toast Message try to play `sample-sound-name.mp3`
   */
  public soundType?: ToastMessageTypes | string;
  /**
   * The message will be displayed.
   */
  public message?: string;
  /**
   * There are four type width `'small' | 'medium' | 'large' | 'big'` you can set one.
   */
  public width?: 'small' | 'medium' | 'large' | 'big' | 'auto';
  /**
   * Autoclose default is true. If set false toast message will not be remove automatically.
   */
  public autoClose ? = true;
  /**
   * Audio element which is defiened with soundType automatically.
   * It not accept manually input from user, it defined by toast itself.
   * But you can handle audio graping the toast element with ViewContentRef.
   */
  public audio?: HTMLAudioElement;
  /**
   * Actions is optional. If user interaction needs actions can be use.
   * There are two parameter. First one is display text. Second is function when clicked.
   * Sample action is {display: 'close', events:()=>console.log('close clicked')}
   */
  public actions?: ToastAction[];

  constructor(item: Toast) {
    this.type = item.type || ToastMessageTypes.ERROR;
    this.soundType = item.soundType || item.type || ToastMessageTypes.ERROR;
    this.message = item.message || null;
    this.width = item.width || 'auto';
    this.autoClose = typeof item.autoClose !== 'undefined' ? item.autoClose : true;
    this.audio = item.audio || null;
    this.actions = item.actions || null;
  }
}
