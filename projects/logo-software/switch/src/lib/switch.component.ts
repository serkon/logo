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
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Switch is a control that is used to quickly switch between two possible states.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-switch
 *   class="large"
 *   [theme]="primary
 *   [disabled]="false"
 *   [rounded]="true"
 * >
 * </logo-switch>
 * ```
 */
@Component({
  selector: 'logo-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchComponent),
    multi: true,
  }],
})
export class SwitchComponent {
  /**
   * Switch Toggle's defines disabling status, default is false.
   */
  @Input() isDisabled: boolean = false;

  /**
   * Switch Toggle's defines shape status, default is true.
   */
  @Input() isRounded: boolean = true;
  @Output() ngModelChange: EventEmitter<boolean> = new EventEmitter();
  /**
   * Trigger an event event when switch change
   */
  @Output() change: EventEmitter<any> = new EventEmitter();

  private _ngModel: boolean = false;

  get ngModel() {
    return this._ngModel;
  }

  /**
   * Switch Toggle's defines default on/off states, default is false.
   */
  @Input() set ngModel(value: boolean) {
    this._ngModel = value;
    this.change.emit(this.ngModel);
  }

  /**
   * Programmatically toggle switch
   */
  public toggleSwitch() {
    if (!this.isDisabled) {
      this.ngModelChange.emit(!this.ngModel);
    }
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
