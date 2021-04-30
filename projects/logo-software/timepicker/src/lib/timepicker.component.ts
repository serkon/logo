/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';

import { PopoverService } from '@logo-software/popover';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * IconPosition sets the clock icon position on the input. Default is left.
 */
export enum IconPosition {
  ICON_LEFT = 'left',
  ICON_RIGHT = 'right',
  ICON_DEFAULT = 'left',
}

/**
 * Set the sizes of the input. Default is medium.
 */
export enum Sizes {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  DEFAULT = 'medium',
}

/**
 * The Timepicker is the component of itself. Provides a proxy to Timepicker options as well as custom picker options.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-timepicker
 *  [id]="'myLogoTimer'"
 *  [(ngModel)]="setTime"
 *  [size]="'medium'"
 *  [iconPosition]="'left'"
 *  [cssClasses]="'my-own-theme-css'"
 * >
 * </logo-timepicker>
 * ```
 */
@Component({
  selector: 'logo-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimepickerComponent),
    multi: true,
  }],
})
export class TimepickerComponent {
  /**
   * The identifier of the picker
   */
  @Input() id: string;
  /**
   * The size of the timepicker. It accepts Sizes enum.
   */
  @Input() size: Sizes = Sizes.DEFAULT;
  /**
   * The position of the clock icon. It accepts IconPosition enum.
   */
  @Input() iconPosition: IconPosition = IconPosition.ICON_DEFAULT;
  /**
   * Your own css class to design the component
   */
  @Input() cssClasses: string;
  public hours = [];
  public minutes = [];
  public selectedHour = '00';
  public selectedMinute = '00';
  public time = null;
  @Output() ngModelChange: EventEmitter<boolean> = new EventEmitter();
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(public popoverService: PopoverService) {
    this.hours = Array.from({length: 24}, (x, i) => i < 10 ? '0' + i : '' + i);
    this.minutes = Array.from({length: 60}, (x, i) => i < 10 ? '0' + i : '' + i);
  }

  private _ngModel: string;

  get ngModel() {
    return this._ngModel;
  }

  /**
   * Set model
   */
  @Input() set ngModel(value: string) {
    const split = value.trim().split(':');
    this._ngModel = value;
    this.selectedHour = split[0];
    this.selectedMinute = split[1];
    this.setTime();
  }

  /**
   * This function shows the clock selection popover
   */
  public showClockSelector() {
    this.popoverService.showPopover('timePopover-' + this.id);
  }

  /**
   * This function closes the clock selection popover
   */
  public closeClockSelector() {
    this.popoverService.closePopover();
  }

  /**
   * This function sets the hour of the clock
   */
  public setHour($event) {
    this.selectedHour = $event.target.value;
    this.setTime();
  }

  /**
   * This function sets the minutes of the clock
   */
  public setMin($event) {
    this.selectedMinute = $event.target.value;
    this.setTime();
  }

  /**
   * This function sets the certain time with setted hours and minutes.
   */
  public setTime() {
    this.time = this.selectedHour + ':' + this.selectedMinute;
  }

  /**
   * This function handles the writing of the input
   */
  public handleWriteTime($event) {
    const findTime = $event.target.value.split(':', 2);
    findTime[0] === undefined || findTime[0].length < 2 ? this.selectedHour = '00' : this.selectedHour = findTime[0];
    findTime[1] === undefined || findTime[1].length < 2 ? this.selectedMinute = '00' : this.selectedMinute = findTime[1];
  }

  apply() {
    this.ngModelChange.emit(this.time);
    this.onChange.emit(this.time);
    this.popoverService.closePopover();
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
