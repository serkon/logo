/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

/**
 * Accordion item interface
 */
export interface MenuItem {
  /**
   * Optional, id of the item if it comes from database,
   */
  id?: any;
  /**
   * Menu item text to be displayed to the user
   */
  name: string;
  /**
   * Class names to be added to menu item
   */
  classes?: string;
  /**
   * Class names to be added to menu item icons
   */
  iconClasses?: string;
  /**
   * Route information to be directed when clicked
   */
  link?: string;
  /**
   * Sets query parameters to the URL.
   */
  params?: { [key: string]: any };
  /**
   * sub menu container
   */
  children?: MenuItem[];
  /**
   * Enum values required for authorization and authentication operations
   */
  role?: string;
  /**
   * The variable that defines whether the menu item is open or not.
   */
  isOpen?: boolean;
}

@Component({
  selector: 'logo-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  /**
   * Specifies one or more CSS classes to be used by the element. When set, this class will also be used by all child elements that don't have their own class.
   */
  @Input() classes: string = '';
  /**
   * Specifies one or more CSS classes to be used by the element's icons. When set, this class will also be used by all child elements icons that don't have their own class.
   */
  @Input() iconClasses?: string = '';
  /**
   * Menu items to show
   */
  @Input() public items: MenuItem[] = [];
  /**
   * It indicates the starting level of the items to be displayed
   */
  @Input() public start = 0;
  /**
   * Specifies the amount of indentation, in pixels, used to offset successive menu leaf levels in a hierarchy. The default value is 10 pixels.
   */
  @Input() public paddingLeft: number = 15;
  /**
   * http request will be get items from server for each category opened
   */
  @Input() request?: HttpRequest<any>;
  /**
   * Role information about which authorized people can view this menu item. Example: roles: ['ROLE_ADMIN', 'ROLE_DEVELOPER']
   */
  @Input() roles: string[] = [];
  /**
   * Item click event trigger. When clicked on any item this event will be called and pushes the item information to the given method.
   */
  @Output() public itemClick: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
  /**
   * Category click event trigger. When clicked on any category item, this event will be called and pushes the item information to the given method.
   */
  @Output() public categoryClick: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
  @Input() public elementId;

  /**
   * Give HttpClient to the component. First import HttpClientModule to main Module of the app. For example.
   *  ```typescript
   * @NgModule({ imports: [
   *   BrowserModule,
   *   HttpClientModule, // Add HttpClientModule
   * ]
   * })
   * export class AppModule {
   * }
   * ```
   * @param http
   */
  constructor(private http?: HttpClient) {
  }

  private _level = 0;

  public get level() {
    return this._level;
  }

  @Input('level')
  public set level(level: any) {
    ++level;
    this._level = level;
  }

  ngOnInit() {
    if (!this.elementId) {
      this.elementId = this.generateElementId();
    }
  }

  generateElementId() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      + Math.random().toString(16).slice(2)
      + Date.now().toString(16).slice(4);
  }

  open(routerLinkActive: RouterLinkActive) {
    this.recursiveParent((routerLinkActive as any).element.nativeElement);
  }

  recursiveParent(element: HTMLLIElement) {
    const parent = (element as any).closest('ul').closest('li');
    if (parent) {
      const input = parent.querySelector('input');
      input.checked = true;
      // if (!(element as any).closest('ul.top-level-accordion')) {
      this.recursiveParent(parent);
      // }
    }
  }

  getMenuList() {
    this.http.request(this.request).subscribe(
      (response: HttpResponse<MenuItem>) => this.onSuccessHandler(response),
    );
  }

  onSuccessHandler(response: HttpResponse<MenuItem>) {
    this.items = response.body.children;
  }

  htmlItemOnClick(item: MenuItem, $event?: MouseEvent) {
    if (event) {
      event.cancelBubble = true;
      event.stopPropagation();
    }
    this.$onItemClick(item);
  }

  $onItemClick(item: MenuItem) {
    this.itemClick.emit(item);
  }

  htmlCategoryOnClick(item: MenuItem, $event?: MouseEvent) {
    if (event) {
      event.cancelBubble = true;
      event.stopPropagation();
    }
    this.$onCategoryClick(item);
  }

  $onCategoryClick(item: MenuItem) {
    this.categoryClick.emit(item);
  }
}
