/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { TreeComponent } from '@logo-software/tree';

import { LeftbarService } from './leftbar.service';

/**
 * Leftbar is the bound between apps. With leftbar component switching between apps feels like you are in the same environment even the apps are different.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-leftbar
 *  (onInit)="sampleUserDataGet()"
 *  (onAddShortCut)="sampleAddShortcut()"
 *  (onAppSelected)="sampleAppAction($event)"
 *  (onHomeButton)="sampleHomeAction()"
 *  (onSettingsButton)="sampleSettingsAction()"
 *  (onTenantSelected)="sampleTenantAction($event)"
 *  (onInfoRequest)="sampleInfoReqAction($event)"
 *  (onSearch)="sampleSearchAction($event)"
 * >
 *    <p>CUSTOM CONTENT</p>
 * </logo-leftbar>
 * ```
 */
@Component({
  selector: 'logo-leftbar',
  styleUrls: ['./leftbar.component.scss'],
  templateUrl: './leftbar.component.html',
})
export class LeftbarComponent implements OnInit {
  /**
   * When add shorcut button clicked, an output event fired with boolean.
   */
  @Output() public onAddShortCut: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   *  Home button click output with boolean.
   */
  @Output() public onHomeButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   *  On tenant selected output fired with selected item id in string.
   */
  @Output() public onTenantSelected: EventEmitter<string> = new EventEmitter<string>();
  /**
   *  On leftbar component initiliazed, an output fired with boolean.
   */
  @Output() public onInit: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   *  When an application selected from user application list, an output fired with selected app id in string.
   */
  @Output() public onAppSelected: EventEmitter<string> = new EventEmitter<string>();
  /**
   *  On settings button clicked, an output fired with boolean.
   */
  @Output() public onSettingsButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   *  When search area input entered and input length is at least 3 chars, an output fired with entered chars.
   */
  @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();
  /**
   *  When an info area clicked from user details, an output fired with selected info id in string.
   */
  @Output() public onInfoRequest: EventEmitter<string> = new EventEmitter<string>();

  public showUserDetails: boolean = false;
  public popoverStatus: boolean = false;
  public activePopover: string = '';

  public emptyShortcutSlots: any;
  @ViewChild(TreeComponent, {read: TreeComponent}) tree: TreeComponent;

  constructor(public leftbarService: LeftbarService) {
  }

  ngOnInit(): void {
    this.onInit.emit(true);
    /**
     *  On Init user data loaded via Leftbar service.
     */
    this.leftbarService.userDataLoad.subscribe(data => {
      const emptySlots: number = 5 - this.leftbarService.userInfo.shortcuts.length || 0;
      this.emptyShortcutSlots = Array.from(Array(emptySlots).keys());
    });
  }

  /**
   *  Toggle user details in leftbar.
   */
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

  /**
   *  Toggle leftbar to slim mode or extended mode.
   */
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

  public doSearchEmitter(val: string) {
    val.length > 2 ? this.onSearch.emit(val) : '';
  }

  public infoReqEmitter(id: string) {
    this.onInfoRequest.emit(id);
  }
}
