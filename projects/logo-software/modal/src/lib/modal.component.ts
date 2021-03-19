import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ModalService } from './modal.service';

/**
 * Modals are a variant of dialog used to present critical information or request user input needed to complete a user’s workflow.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-modal
 *  (onOpened)="sampleOpenAction()"
 *  [modalId]="'logoModal'"
 *  [title]="'My Logo Modal'"
 * >
 *   <ng-container body>
 *     <p class="large">This is my modal content</p>
 *   </ng-container>
 *   <ng-container footer>
 *     <p class="small">This is the footer content of the modal</p>
 *   </ng-container>
 * </logo-modal>
 * ```
 */
@Component({
  selector: 'logo-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  /**
   * The identifier of the modal. You can set it dynamically.
   */
  @Input() modalId: string = 'logo-modal';
  /**
   * The title of the modal
   */
  @Input() title: string = '';

  /**
   * When modal opened, output fired by the component.
   */
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
