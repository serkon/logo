import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Modal service lets you trigger open and close actions
 */
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public show: boolean = false;
  public hasFooter: boolean = false;
  public supportFullscreen: boolean = false;
  public isFullscreen: boolean = false;
  public hasShadow: boolean = false;

  modalVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  /**
   * Lets you close the modal.
   */
  public closeModal() {
    this.show = false;
    if (this.isFullscreen) {
      this.isFullscreen = false;
    }
    this.modalVisibilityChange.next(this.show);
  }

  /**
   * Lets you open the modal.
   */
  public openModal() {
    this.show = true;
    this.modalVisibilityChange.next(this.show);
  }

  /**
   * Lets you toggle the modal dialog on fullscreen or not.
   */
  public toogleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
