/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

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
export class LeftbarComponent implements OnInit, OnChanges {
  @Input() public user: any;
  @Input() public profileSettings: any;
  @Input() public applications: any;
  @Input() public defaultAppId: string;
  @Input() public tenants: any;
  @Input() public defaultTenant: any;
  @Input() public onPrem: boolean;
  @Input() public isMainPage: boolean;
  @Input() public searchPlaceholder: string;
  @Input() public favorites: any;
  @Input() public enableShortCuts: boolean = true;
  /**
   * When add shorcut button clicked, an output event fired with boolean.
   */
  @Output() public onAddShortCut: EventEmitter<number> = new EventEmitter<number>();
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

  @Output() public onTenantSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onDefaultTenantSet: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onFocusSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onClickShortCut: EventEmitter<any> = new EventEmitter<any>();

  public showUserDetails: boolean = false;
  public popoverStatus: boolean = false;
  public activePopover: string = '';
  public mobileMenu: boolean = false;
  public emptyShortcutSlots: any;
  public defaultApp: any = {};

  @ViewChild(TreeComponent, {read: TreeComponent}) tree: TreeComponent;

  constructor(public leftbarService: LeftbarService) {
  }

  ngOnInit(): void {
    this.onInit.emit(true);
    this.setEmptySlots();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.favorites) {
      this.setEmptySlots();
    } else if ((changes.defaultAppId || changes.applications) && (this.applications && this.applications.length > 0 && this.defaultAppId)) {
      const foundApp = this.applications.find(x => x.Id === this.defaultAppId);
      this.defaultApp = foundApp ? foundApp : {};
    }
  }

  public homeEmitter() {
    this.popoverStatus = false;
    this.onHomeButton.emit(true);
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

  public toggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  public selectTenantEmitter(id: string) {
    this.popoverStatus = false;
    this.onTenantSelected.emit(id);
  }

  public selectAppEmitter(app: any) {
    this.defaultApp = app;
    this.popoverStatus = false;
    this.onAppSelected.emit(app.Id);
  }

  public shortcutSettingsEmitter() {
    this.popoverStatus = false;
    this.onSettingsButton.emit(true);
  }

  public addShortcutEmitter(i: number) {
    this.popoverStatus = false;
    this.onAddShortCut.emit(i);
  }

  public clickShortcutEmitter(shortcut: any) {
    this.popoverStatus = false;
    this.onClickShortCut.emit(shortcut);
  }

  public doSearchEmitter(val: string) {
    this.popoverStatus = val.length > 2 ? false : this.popoverStatus;
    val.length > 2 ? this.onSearch.emit(val) : '';
  }

  public doFocusSearchEmitter(val: string) {
    this.popoverStatus = false;
    this.onFocusSearch.emit(val);
  }

  public doTenantSearchEmitter(val: string) {
    val.length > 2 ? this.onTenantSearch.emit(val) : '';
  }

  public setAsDefaultTenantEmitter(id: string) {
    this.onDefaultTenantSet.emit(id);
  }

  public infoReqEmitter(item: any, popoverItem: any) {
    if (!!popoverItem) {
      this.togglePopover('popover_' + item.actionParam);
      item.desc = popoverItem.Name;
      item.value = popoverItem.Value;
    }
    this.popoverStatus = false;
    this.onInfoRequest.emit(item);
  }

  private setEmptySlots() {
    const emptySlots: number = 5 - (this.favorites ? this.favorites.length : 0);
    this.emptyShortcutSlots = Array.from(Array(emptySlots).keys());
  }
}
