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
    this.toastService.success('Survey results couldn’t be saved!', {
      autoClose: false,
      width: 'small',
      actions: [{display: 'close me', event: (data) => console.log('data is : ', data)}],
    });
  }
}
