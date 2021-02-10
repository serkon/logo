import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'logo-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() modalId: string = 'logo-modal';
  @Input() title: string = '';

  @Output() public onOpened: EventEmitter<boolean> = new EventEmitter<boolean>();

  public hasFooter: boolean = false;

  @ViewChild('dialogFooter', {read: ElementRef, static: true}) dialogFooter: ElementRef;

  constructor(public modal: ModalService) {
  }

  ngOnInit(): void {
    this.dialogFooter.nativeElement.innerHTML === '' ? this.hasFooter = false : this.hasFooter = true;
    this.onOpened.emit(true);
  }

}
