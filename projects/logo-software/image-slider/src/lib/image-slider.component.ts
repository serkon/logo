/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Image Slider is a key to product showcases. With Image Slider Component you can easily add simple image gallery your page.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-image-slider
 *  [media]="items"
 *  [texts]="captions"
 *  (onItemChange)="sampleChangeEvent($event)"
 * >
 * </logo-image-slider>
 * ```
 */
@Component({
  selector: 'logo-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  @HostBinding('class') name = 'image-slider';
  /**
   * Gives output when image slide changed with changing position.
   */
  @Output() public onItemChange: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('wrap', {read: ElementRef, static: true}) wrap: ElementRef;
  @ViewChild('items', {read: ElementRef, static: true}) items: ElementRef;
  @ViewChild('scroller', {read: ElementRef, static: true}) scroller: ElementRef;
  itemCount = 0;
  pos = 0;

  constructor(private domSanitizer: DomSanitizer) {
    window.addEventListener('resize', () => this.setTransform());
  }

  private _media: string[] = [];

  get media(): string[] {
    return this._media;
  }

  /**
   * Import the images that will have shown at image slider. Media input will be string array.
   */
  @Input() set media(value: string[]) {
    this._media = value;
    this.itemCount = this._media.length;
  }

  private _texts: string[] = [];

  /**
   * Import the images' captions that will have shown on images. Text input will be string array.
   */
  @Input() get texts(): string[] {
    return this._texts;
  }

  set texts(value: string[]) {
    this._texts = value;
  }

  sanitizer(image: string) {
    return this.domSanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  setTransform() {
    this.items.nativeElement.style['transform'] = 'translate3d(' + (-this.pos * this.items.nativeElement.offsetWidth) + 'px,0,0)';
  }

  /**
   * Change image slider to previous image
   */
  prev() {
    this.pos = 0 === this.pos ? this.itemCount - 1 : Math.max(this.pos - 1, 0);
    this.setTransform();
    this.onItemChange.emit(this.pos);
  }

  /**
   * Change image slider to next image
   */
  next() {
    this.pos = this.pos === this.itemCount - 1 ? 0 : Math.min(this.pos + 1, this.itemCount - 1);
    this.setTransform();
    this.onItemChange.emit(this.pos);
  }

  /**
   * Change image slider to selected index
   * @param index
   */
  changeItem(index: number) {
    this.onItemChange.emit(index);
  }

  move(index: number) {
    this.pos = index;
    this.setTransform();
    this.onItemChange.emit(this.pos);
  }
}
