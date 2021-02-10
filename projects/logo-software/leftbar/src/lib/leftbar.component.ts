/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TreeComponent } from '@logo-software/tree';

import { LeftbarService } from './leftbar.service';
import { PaasUser } from './user';

@Component({
  selector: 'logo-leftbar',
  styleUrls: ['./leftbar.component.scss'],
  templateUrl: './leftbar.component.html',
})
export class LeftbarComponent implements OnInit {
  @Output() public onAddShortCut: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onHomeButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onTenantSelected: EventEmitter<string> = new EventEmitter<string>();

  @Output() public onInit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onAppSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onSettingsButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  public showUserDetails: boolean = false;
  public popoverStatus: boolean = false;
  public activePopover: string = '';

  public emptyShortcutSlots: any;
  @ViewChild(TreeComponent, {read: TreeComponent}) tree: TreeComponent;

  private _data: PaasUser

  get data(): PaasUser {
    return this._data;
  }

  @Input() set data(value: PaasUser) {
    this._data = value;
    console.log(value);
  }

  constructor(public leftbarService: LeftbarService) {
  }

  ngOnInit(): void {
    this.onInit.emit(true);
    this.leftbarService.userDataLoad.subscribe(data => {
      const emptySlots: number = 5 - this.leftbarService.userInfo.user.shortcuts.length || 0;
      this.emptyShortcutSlots = Array.from(Array(emptySlots).keys());
    });
  }

  public toggleUserDetails() {
    this.showUserDetails = !this.showUserDetails;
  }

  public togglePopover(id: string) {
    this.leftbarService.isSlim ? this.leftbarService.isSlim = false : '';
    if (id !== this.activePopover && this.activePopover !== '' && this.popoverStatus) {
      this.popoverStatus = !this.popoverStatus;
    }
    this.activePopover = id;
    this.popoverStatus = !this.popoverStatus;
  }

  public toggleMenu() {
    this.popoverStatus ? this.popoverStatus = false : '';
    this.leftbarService.isSlim = !this.leftbarService.isSlim;
  }

  public homeEmitter() {
    this.onHomeButton.emit(true);
  }

  public selectTenantEmitter(id: string) {
    this.onTenantSelected.emit(id);
  }

  public selectAppEmitter(id: string) {
    this.onAppSelected.emit(id);
  }

  public shortcutSettingsEmitter() {
    this.onSettingsButton.emit(true);
  }

  public addShortcutEmitter() {
    this.onAddShortCut.emit(true);
  }
}
