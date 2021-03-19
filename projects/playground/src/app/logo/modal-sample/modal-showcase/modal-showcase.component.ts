import { Component, OnInit } from '@angular/core';

import { ModalService } from '@logo-software/modal';

@Component({
  selector: 'logo-modal-showcase',
  templateUrl: './modal-showcase.component.html',
  styleUrls: ['./modal-showcase.component.scss'],
})
export class ModalShowcaseComponent implements OnInit {

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalService.openModal('logoModal');
  }

  public sampleOpenAction() {
    console.log('### Modal Opened');
  }
}
