/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, Input } from '@angular/core';

/**
 * IconPosition defines button icon's position where will be located. There are 5 types position 'icon-left' | 'icon-right' | 'icon-top' | 'icon-bottom' | 'icon-only'
 */
export enum IconPosition {
  ICON_LEFT = 'icon-left',
  ICON_RIGHT = 'icon-right',
  ICON_TOP = 'icon-top',
  ICON_BOTTOM = 'icon-bottom',
  ICON_ONLY = 'icon-only',
}

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
 *   [iconPosition]="'icon-left'"
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
export class BadgeComponent {
  /**
   * The text that shown in the badge.
   */
  @Input() label: string = null;
  /**
   * Your own css class for theming.
   */
  @Input() cssClasses: string;
  /**
   * Size of the badge. It accepts 'small', 'medium', 'large'. Default is medium
   */
  @Input() size: string = 'medium';
  /**
   * The semantic themes of Logo Theme. Default is 'secondary'. It accepts 'primary', 'secondary', 'success', 'warning', 'danger', 'purple', 'yellow', 'teal', 'tan', 'pink'
   */
  @Input() theme: string;
  /**
   * Position of the icon. If not set default is 'icon-left'. It accepts 'icon-left', 'icon-right', 'icon-top', 'icon-bottom'.
   */
  @Input() iconPosition: IconPosition = null;
  /**
   * Badge accepts Logo Icon types. You can use logo name suc as 'alarm_bell_1'.
   */
  @Input() icon: string = null;

  public setIconClass() {
    const iconClassList = [];
    if (this.icon) {
      iconClassList.push('le-' + this.icon);
      iconClassList.push(!this.iconPosition ? this.label ? IconPosition.ICON_LEFT : IconPosition.ICON_ONLY : this.iconPosition);
    }
    return iconClassList;
  }
}
