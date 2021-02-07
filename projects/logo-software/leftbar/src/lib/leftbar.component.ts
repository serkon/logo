/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LeftbarService } from './leftbar.service';

@Component({
  selector: 'logo-leftbar',
  styleUrls: ['./leftbar.component.scss'],
  templateUrl: './leftbar.component.html',
})
export class LeftbarComponent implements OnInit {
  @Output() public onInit: EventEmitter<boolean> = new EventEmitter<boolean>();

  public emptyShortcutSlots: any;

  constructor(public leftbarService: LeftbarService) {
  }

  ngOnInit(): void {
    this.onInit.emit(true);
    this.leftbarService.userDataLoad.subscribe(data => {
      const emptySlots: number = 5 - this.leftbarService.userInfo.user.shortcuts.length || 0;
      this.emptyShortcutSlots = Array.from(Array(emptySlots).keys());
    });
  }

  public showPopover(id: string) {
    console.log(id);
  }

  public homeEmitter() {
    console.log('Home Button');
  }

  public selectTanentEmitter(id: string) {
    console.log(id);
  }

  public selectAppEmitter(id: string) {
    console.log(id);
  }

  public shortcutSettingsEmitter() {
    console.log('Shortcut Settings');
  }

  public addShortcutEmitter() {
    console.log('Add Shortcut Settings');
  }

}
