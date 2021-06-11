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
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { RouterLinkActive } from '@angular/router';

import { Tree } from './tree';

/**
 * Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The Tree component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a Tree.
 *
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-tree [items]="items" [start]="0" [iconClasses]=""></logo-tree>
 * ```
 */
@Component({
  selector: 'logo-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  /**
   * group
   */
  @Input() group: boolean = false;
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
  @Input() public items: Tree[] = [];
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
  @Output() public itemClick: EventEmitter<Tree> = new EventEmitter<Tree>();
  /**
   * Category click event trigger. When clicked on any category item, this event will be called and pushes the item information to the given method.
   */
  @Output() public categoryClick: EventEmitter<Tree> = new EventEmitter<Tree>();
  /**
   * The Matched router is activated this method will be triggered. It will push the tree item to the given method.
   */
  @Output() public routeItemActivated: EventEmitter<Tree> = new EventEmitter<Tree>();
  /**
   * Item checkbox status change trigger. When clicked, clicked item will be emited
   */
  @Output() public itemCheckChange: EventEmitter<any> = new EventEmitter<any>();
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
      (response: HttpResponse<Tree>) => this.onSuccessHandler(response),
    );
  }

  onSuccessHandler(response: HttpResponse<Tree>) {
    this.items = response.body.children;
  }

  htmlItemOnClick(item: Tree, $event?: MouseEvent) {
    if (event) {
      event.cancelBubble = true;
      event.stopPropagation();
    }
    this.$onItemClick(item);
  }

  $onItemClick(item: Tree) {
    this.itemClick.emit(item);
  }

  $onItemCheckChange(item: any) {
    this.itemCheckChange.emit(item);
  }

  htmlCategoryOnClick(item: Tree, $event?: MouseEvent) {
    if (event) {
      event.cancelBubble = true;
      event.stopPropagation();
    }
    this.$onCategoryClick(item);
  }

  $onCategoryClick(item: Tree) {
    this.categoryClick.emit(item);
  }

  htmlSetPadding(level, start) {
    const val = Number(level) - (Number(start) + (this.group ? 1 : 0));
    const padding = val <= 0 ? 0 : val * this.paddingLeft + 'px';
    return level >= start ? padding : this.paddingLeft + 'px';
  }

  onRouteItemActivated(item) {
    this.routeItemActivated.emit(item);
  }

  /**
   * set left padding size programmatically for collapsed menus.
   * @param value
   */
  setPadding(value: number = 0) {
    this.paddingLeft = value;
  }
}
