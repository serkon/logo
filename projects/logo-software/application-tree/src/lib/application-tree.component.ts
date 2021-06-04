/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, forwardRef, Input, Output, TemplateRef } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { RouterLinkActive } from '@angular/router';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Tree } from './tree';
import { TreeStructure } from './tree-structure';

/**
 * Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The Tree component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a Tree.
 *
 * __Usage Example__
 *
 * <sub>**app.component.html**</sub>
 * ```html
 * <logo-application-tree [items]="items" [start]="0" [iconClasses]=""></logo-application-tree>
 * ```
 */
@Component({
  selector: 'logo-application-tree',
  templateUrl: './application-tree.component.html',
  styleUrls: ['./application-tree.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ApplicationTreeComponent),
    multi: true,
  }],
})
export class ApplicationTreeComponent {
  /**
   * Structure of the items
   */
  @Input() structure: TreeStructure;
  /**
   * First child item is a Group title or not
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
  @Input() public items: any[] = [];
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
   * Elements Id of the items
   */
  @Input() public elementId: string;
  /**
   * Item Template reference
   */
  @Input('itemTemplate')
  public itemTemplateRef: TemplateRef<any>;
  public _selectedItems = [];
  /**
   * Maximum selections allowance
   */
  @Input() maxSelected: number = null;
  /**
   * Item click event trigger. When clicked on any item this event will be called and pushes the item information to the given method.
   */
  @Output() public itemClick: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Category click event trigger. When clicked on any category item, this event will be called and pushes the item information to the given method.
   */
  @Output() public categoryClick: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Item checkbox status change trigger. When clicked, clicked item will be emited
   */
  @Output() public itemCheckChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() ngModelChange: EventEmitter<any[]> = new EventEmitter<any[]>();

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

  private _ngModel: any[] = [];

  get ngModel() {
    return this._ngModel;
  }

  /**
   * ngModel of the selected items
   */
  @Input() set ngModel(value: any) {
    this._ngModel = value;
    this._selectedItems = value;
  }

  getChildren(item: any) {
    const result = item[!!this.structure && !!this.structure.childrenField ? this.structure.childrenField : 'children'];
    return result;
  }

  hasChild(item) {
    const result = (!!this.structure && !!this.structure.hasChildrenField && !!item[this.structure.hasChildrenField]) ||
      (!!this.structure && !!this.structure.childrenField && item[this.structure.childrenField] && item[this.structure.childrenField].length > 0) ||
      item.children && item.children.length > 0;
    return result;
  }

  getDisplayName(item: any) {
    const result = item[!!this.structure && !!this.structure.displayField ? this.structure.displayField : 'name']
    return result;
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
      (response: HttpResponse<any>) => this.onSuccessHandler(response),
    );
  }

  onSuccessHandler(response: HttpResponse<any>) {
    this.items = response.body.children;
  }

  $triggerItemCheckChange(item: any) {
    this.itemCheckChange.emit(item);
  }

  $onItemCheckChange($event: any, item: any) {
    if ($event.target.checked) {
      if (!this.ngModel.find(i => i === item)) {
        this._ngModel.push(item);
        this.ngModel = this._ngModel;
      }
    } else {
      const index = this.ngModel.findIndex(i => i === item);
      if (index >= -1) {
        this.ngModel.splice(index, 1);
      }
    }
    this.ngModelChange.emit(this.ngModel);
  }

  htmlIsUndefined(item) {
    return typeof item.isSelect === 'undefined';
  }

  htmlItemOnClick(item: Tree, $event?: MouseEvent) {
    this.$onItemClick(item);
  }

  $onItemClick(item: any) {
    this.itemClick.emit(item);
  }

  htmlCategoryOnClick(item: any, $event?: MouseEvent) {
    if (event) {
      event.cancelBubble = true;
      event.stopPropagation();
    }
    this.$onCategoryClick(item);
  }

  $onCategoryClick(item: any) {
    this.categoryClick.emit(item);
  }

  htmlSetPadding(level, start) {
    const val = Number(level) - (Number(start) + (this.group ? 1 : 0));
    const padding = val <= 0 ? 0 : val * this.paddingLeft + 'px';
    return level >= start ? padding : this.paddingLeft + 'px';
  }

  /**
   * set left padding size programmatically for collapsed menus.
   * @param value
   */
  setPadding(value: number = 0) {
    this.paddingLeft = value;
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  isExist(id) {
    const exist = this.ngModel.filter(item => item.Id === id);
    return exist.length > 0;
  }
}
