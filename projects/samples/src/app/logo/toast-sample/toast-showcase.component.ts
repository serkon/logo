import { Component } from '@angular/core';
import { ToastService } from '@logo-software/toast';

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
    this.toastService.soundEnable = false;
    this.toastService.error('Survey results couldn’t be saved!', {
      autoClose: false,
      width: 'small',
      actions: [{
        display: 'close me', event: (data) => {
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
}
