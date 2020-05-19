import { Component } from '@angular/core';
import { MessageTypes, ToastService } from '@logo-software/toast';

@Component({
  selector: 'logo-toast-sample',
  templateUrl: './toast-showcase.component.html',
  styleUrls: ['./toast-showcase.component.scss'],
})
export class ToastShowcaseComponent {
  counter = 0;

  constructor(private toastService: ToastService) {
  }

  show() {
    const randomMessageType = MessageTypes[Object.keys(MessageTypes)[Math.floor(Math.random() * Math.floor(4))]];
    this.toastService.soundEnable = false;
    this.toastService.show({
      type: randomMessageType,
      message: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. , ${this.counter++} `,
      autoClose: true,
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

  error() {
    this.toastService.error('Simple error message', {autoClose: true});
  }

  info() {
    this.toastService.information('Simple error message', {autoClose: true});
  }

  warning() {
    this.toastService.warning('Simple error message', {autoClose: true});
  }

  success() {
    this.toastService.success('Simple error message', {autoClose: true});
  }
}
