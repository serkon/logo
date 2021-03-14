import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { DrawerService } from './drawer.service';

/**
 * The drawer component is designed to add side content to a small section of your app. Left side menu can be opened or closed using the open(), close() and toggle() methods. Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```angular2html
 * <logo-drawer height="65px" width="200px" [menu]="false">
 *   <ng-container drawer-left>
 *     <div class="logo">LOGO<span>ELEMENTS</span></div>
 *   </ng-container>
 *   <ng-container drawer-top>
 *     <h1>Title</h1>
 *   </ng-container>
 *   <ng-container drawer-right>
 *     content goes here. <button (click)="close()">menu</button>
 *   </ng-container>
 * </logo-drawer>
 * ```
 */
@Component({
  selector: 'logo-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit, OnDestroy {
  /**
   * left menu visibility, default is open.
   */
  @Input() menu: boolean = false;
  /**
   * menu opener button visibility configuration, default is visible
   */
  @Input() public opener: boolean = true;
  @Input() overflow: boolean = false;

  constructor(private elementRef: ElementRef, public drawerService: DrawerService) {
    this.setColors(this.bgColors);
    this.width = this._width;
    this.height = this._height;
    this.drawerService.setMenuWidth$.subscribe((width: string) => {
      this.width = width;
    });
  }

  private _height: string = '65px';

  /**
   * header height, default is 65px
   * @param value
   */
  @Input() set height(value: string) {
    this._height = value;
    this.setProperty(`--drawer-height`, value);
    this.setProperty(`--drawer-top-height`, this.overflow ? 0 : this._height);
  }

  private _width = '300px';

  /**
   * left menu with, default is 300px
   * @private
   */
  @Input() set width(value: string) {
    this._width = value;
    this.setProperty(`--drawer-width`, value);
  }

  private _bgColors: { [key: string]: string } = {left: '#1c1d22', top: '#ffffff', right: '#f5f5f7'};

  /**
   * layout background color can chane with parameter. Default is {left: '#1c1d22', top: '#ffffff', right: '#f5f5f7'}
   */
  @Input() get bgColors() {
    return this._bgColors;
  }

  set bgColors(value: { [key: string]: string }) {
    this._bgColors = {...this._bgColors, ...value};
    this.setColors(value);
  }

  ngOnInit() {
    this.drawerService.menu = this.menu;
    this.drawerService.isOpenerActive = this.opener;
  }

  setProperty(property, value) {
    this.elementRef.nativeElement.style.setProperty(property, value);
  }

  setColors(colors: { [key: string]: string }) {
    Object.keys(colors).forEach((key, i) => {
      this.elementRef.nativeElement.style.setProperty(`--drawer-${key}`, colors[key]);
    });
  }

  getColor(item) {
    return getComputedStyle(document.documentElement).getPropertyValue(item);
  }

  /**
   * the left menu status will be toggled
   */
  toggle() {
    return this.drawerService.menu = !this.drawerService.menu;
  }

  /**
   * the left menu status will be changed to the closed
   */
  open() {
    return this.drawerService.menu = true;
  }

  /**
   * left menu status will be changed to the opened
   */
  close() {
    return this.drawerService.menu = false;
  }

  ngOnDestroy() {
    this.drawerService.changeTitle$.unsubscribe();
  }
}
