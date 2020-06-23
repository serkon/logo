import { Component } from '@angular/core';
import { ToastMessageTypes, ToastService } from '@logo-software/toast';

@Component({
  selector: 'logo-toast-sample',
  templateUrl: './toast-showcase.component.html',
  styleUrls: ['./toast-showcase.component.scss'],
})
export class ToastShowcaseComponent {
  counter = 0;

  constructor(private toastService: ToastService) {
  }

  /**
   * Random sample with accept and cancel options.
   * It will generate toast message.
   */
  show() {
    const randomMessageType = ToastMessageTypes[Object.keys(ToastMessageTypes)[Math.floor(Math.random() * Math.floor(4))]];
    this.toastService.soundEnable = false;
    this.toastService.show({
      type: randomMessageType,
      message: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. , ${this.counter++} `,
      autoClose: false,
      width: 'small',
      actions: [
        {display: 'accept', event: (toast) => console.log(toast)},
        {
          display: 'close', event: (data) => {
            return new Promise(resolve => {
              let counter = 0;
              const interval = window.setInterval(() => {
                counter++;
                console.log(data, counter);
                if (counter === 10) {
                  window.clearInterval(interval);
                  console.log('interval cleared');
                  resolve('düdük');
                  console.log('resolve value is düdük');
                }
              }, 100);
            });
          },
        }],
    });
  }

  info() {
    this.toastService.information('Simple error message');
  }

  /**
   * AutoClose manually canceled
   */
  error() {
    this.toastService.error('Simple error message', {autoClose: true});
  }

  /**
   * Add sound also to the message, the sound type is the file name will be played.
   */
  warning() {
    this.toastService.soundEnable = true;
    this.toastService.warning('Simple error message', {soundType: 'warning', autoClose: false});
  }

  /**
   * Toast with medium size
   */
  success() {
    this.toastService.success('Simple error message', {width: 'small', autoClose: false});
  }
}
