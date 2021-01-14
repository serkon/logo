import { Component, ElementRef, Input } from '@angular/core';
import * as Color from 'color';
import { DrawerService } from './drawer.service';

/**
 * Drawer creates main layout of the application
 *
 * @stacked-example(Drawer Showcase, logo/drawer-sample/drawer-showcase/drawer-showcase.component)
 */
@Component({
  selector: 'logo-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input() closed = false;

  constructor(private elementRef: ElementRef, public drawerService: DrawerService) {
    this.setColors(this.bgColors);
    this.setProperty(`--drawer-width`, this._width);
    this.setProperty(`--drawer-height`, this._height);
  }

  private _height = '65px';

  @Input() set height(value: string) {
    this._height = value;
    this.setProperty(`--drawer-height`, value);
  }

  private _width = '300px';

  set width(value: string) {
    this._width = value;
    this.setProperty(`--drawer-width`, value);
  }

  private _bgColors: { [key: string]: string } = {left: '#1c1d22', top: '#ffffff', right: '#f5f5f7'};

  @Input() get bgColors() {
    return this._bgColors;
  }

  set bgColors(value: { [key: string]: string }) {
    this._bgColors = {...this._bgColors, ...value};
    this.setColors(value);
  }

  ngOnInit() {
    this.drawerService.menu = this.closed;
  }

  setProperty(property, value) {
    this.elementRef.nativeElement.style.setProperty(property, value);
  }

  setColors(colors: { [key: string]: string }) {
    Object.keys(colors).forEach((key, i) => {
      this.elementRef.nativeElement.style.setProperty(`--drawer-${key}`, colors[key]);
      if (key === 'top') {
        this.elementRef.nativeElement.style.setProperty(`--drawer-${key}-bottom`, Color(colors[key]).darken(0.08));
      }
    });
  }

  getColor(item) {
    return getComputedStyle(document.documentElement).getPropertyValue(item);
  }

  onClickHandler() {
    return this.drawerService.menu = !this.drawerService.menu;
  }
}
