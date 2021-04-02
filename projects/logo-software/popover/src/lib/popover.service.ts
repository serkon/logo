/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { Injectable } from '@angular/core';

/**
 * This the service for popover the edit popover options on your own code on-the-go.
 */
@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  /**
   * Display or not option of the popover
   */
  public display: boolean;
  /**
   * Global option of the search option shown or not.
   */
  public hasSearch: boolean;
  /**
   * Global identifier variable for active popover. Library checks this variable to choose which popover will be shown.
   */
  public activePopover: string = null;

  /**
   * Global funtion to toggle a popover with id.
   * @param id
   */
  public togglePopover(id: string) {
    id !== this.activePopover && this.activePopover !== null && this.display ? this.closePopover() : '';
    id === this.activePopover ? this.closePopover() : this.activePopover = id;
    this.display = !this.display;
  }

  /**
   * Global funtion for close popovers
   */
  public closePopover() {
    this.activePopover = null;
    this.display = false;
  }

  /**
   * Global funtion to show a popover with the id.
   * @param id
   */
  public showPopover(id: string) {
    if (id !== this.activePopover && this.activePopover !== null && this.display) {
      this.closePopover();
    }
    this.activePopover = id;
    this.display = true;
  }
}
