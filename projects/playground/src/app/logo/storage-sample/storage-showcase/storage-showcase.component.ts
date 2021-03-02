import { Component } from '@angular/core';

import { StorageClass } from '@logo-software/storage';

@Component({
  selector: 'logo-storage-showcase',
  templateUrl: './storage-showcase.component.html',
  styleUrls: ['./storage-showcase.component.scss'],
})
export class StorageShowcaseComponent {

  user: any;

  constructor() {
    StorageClass.setItem('user', {name: 'Serkan', surname: 'Konakcı', email: 'konakci@mail.com'});
    this.user = StorageClass.getItem('user');
  }

}
