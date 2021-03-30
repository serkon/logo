/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, Input, OnInit } from '@angular/core';

/**
 * Badges visualize and make little information cracks to readable assets.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-badge
 *   [label]="'Some kind of badge text'"
 *   [theme]="'primary'"
 *   [cssClasses]="'my-own-logo-badge'"
 *   [size]="'large'"
 *   [iconPosition]="'left'"
 *   [icon]="'info'"
 * >
 * </logo-badge>
 * ```
 */
@Component({
  selector: 'logo-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  /**
   * The text that shown in the badge.
   */
  @Input() label: string;
  /**
   * Your own css class for theming.
   */
  @Input() cssClasses: string;
  /**
   * Size of the badge. It accepts 'small', 'medium', 'large'. Default is medium
   */
  @Input() size: string;
  /**
   * The semantic themes of Logo Theme. Default is 'secondary'. It accepts 'primary', 'secondary', 'success', 'warning', 'danger', 'purple', 'yellow', 'teal', 'tan', 'pink'
   */
  @Input() theme: string;
  /**
   * Position of the icon. If not set default is 'left'. It accepts 'left', 'right', 'top', 'bottom'.
   */
  @Input() iconPosition: string = 'none';
  /**
   * Badge accepts Logo Icon types. You can use logo name suc as 'alarm_bell_1'.
   */
  @Input() icon: string;

  ngOnInit(): void {
    this.icon !== undefined ? this.icon = 'le-' + this.icon : this.icon = '';
    this.icon !== undefined && this.label !== undefined && this.iconPosition === 'icon-none' ? this.iconPosition = 'icon-left' : this.iconPosition = 'icon-' + this.iconPosition;
    this.icon !== undefined && this.label === undefined && this.iconPosition === 'icon-none' ? this.iconPosition = 'icon-only' : '';
  }
}
