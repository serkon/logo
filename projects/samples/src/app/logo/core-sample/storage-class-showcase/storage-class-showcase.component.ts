import { Component } from '@angular/core';
import { StorageClass } from '@logo-software/core';

@Component({
  selector: 'logo-storage-class-showcase',
  templateUrl: './storage-class-showcase.component.html',
  styleUrls: ['./storage-class-showcase.component.scss'],
})
export class StorageClassShowcaseComponent {
  user: any;

  constructor() {
    StorageClass.setItem('user', {name: 'Serkan', surname: 'Konakcı', email: 'konakci@mail.com'});
    this.user = StorageClass.getItem('user');
  }
}
