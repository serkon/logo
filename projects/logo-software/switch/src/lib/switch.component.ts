/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Here is the switch component usage.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-switch
 * class="large"
 * [theme]="primary
 * [disabled]="false"
 * [rounded]="true"
 * ></logo-switch>
 * ```
 */

@Component({
  selector: 'logo-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  /*
    Switch Toggle's defines colors via Logo-Elements theme colors.
   */
  @Input() theme: 'primary' | 'light' | 'success' | 'warning' | 'danger' = 'primary';
  /*
    Switch Toggle's defines disabling status, default is false.
   */
  @Input() isDisabled: boolean = false;
  /*
    Switch Toggle's defines shape status, default is true.
   */
  @Input() isRounded: boolean = true;
  /*
    Switch Toggle's defines default on/off states, default is false.
   */
  @Input() toggleState: boolean = false;

  public toggleSwitch() {
    if (!this.isDisabled) {
      this.toggleState = !this.toggleState;
    }
  }
}
