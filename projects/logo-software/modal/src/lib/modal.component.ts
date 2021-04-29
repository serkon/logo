import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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
export class ModalComponent implements AfterViewInit {
  /**
   * The identifier of the modal. You can set it dynamically.
   */
  @Input() modalId: string = 'logo-modal';
  /**
   * The title of the modal
   */
  @Input() title: string = '';
  /**
   * Shadow option of the modal footer. If set true, a shadow will be shown upside of the footer area. Default is false.
   */
  @Input() footerShadow: boolean = false;
  /**
   * Add your own css class to modal base. You can access dialog base by using '.dialog' class name in your own css class.
   */
  @Input() cssClasses: string = '';
  /**
   * Option for show fullscreen button or not. Default is false.
   */
  @Input() supportFullscreen: boolean = false;

  /**
   * When modal opened or closed, a boolean status of the modal fired by the component.
   */
  @Output() public onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   * When modal closed, output fired by the component.
   */
  @Output() public onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('dialogFooter', {read: ElementRef, static: true}) dialogFooter: ElementRef;

  constructor(public modal: ModalService) {
    if (this.modal.modalVisibilityChange) {
      this.onToggle.emit(this.modal.show);
    }
  }

  ngAfterViewInit(): void {
    this.dialogFooter.nativeElement.innerHTML === '' ? this.modal.hasFooter = false : this.modal.hasFooter = true;
    this.modal.supportFullscreen = this.supportFullscreen;
    this.modal.hasShadow = this.footerShadow;
  }

}
