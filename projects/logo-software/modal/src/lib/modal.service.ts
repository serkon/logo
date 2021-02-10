import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public show: boolean = false;

  constructor() {
  }

  public closeModal(id: string) {
    this.show = false;
  }

  public openModal(id: string) {
    this.show = true;
  }
}
