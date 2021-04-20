import { Component } from '@angular/core';

import { ModalService } from '@logo-software/modal';

@Component({
  selector: 'logo-modal-showcase',
  templateUrl: './modal-showcase.component.html',
  styleUrls: ['./modal-showcase.component.scss'],
})
export class ModalShowcaseComponent {

  constructor(private modalService: ModalService) {
  }

  public openModal() {
    this.modalService.openModal();
  }

  public sampleOpenAction() {
    console.log('### Modal Opened');
  }

  public closeModal() {
    this.modalService.closeModal();
  }
}
