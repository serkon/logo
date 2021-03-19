import { Injectable } from '@angular/core';

/**
 * Modal service lets you trigger open and close actions
 */
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public show: boolean = false;

  constructor() {
  }

  /**
   * Lets you close modal which has the id.
   * @param id
   */
  public closeModal(id: string) {
    this.show = false;
  }

  /**
   * Lets you open the modal which has the id.
   * @param id
   */
  public openModal(id: string) {
    this.show = true;
  }
}
