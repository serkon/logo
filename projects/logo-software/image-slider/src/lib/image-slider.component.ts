import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'logo-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {

  @HostBinding('class') name = 'slider';
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

  @Input() get media(): string[] {
    return this._media;
  }

  set media(value: string[]) {
    this._media = value;
    this.itemCount = this._media.length;
  }

  private _texts: string[] = [];

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

  prev() {
    this.pos = 0 === this.pos ? this.itemCount - 1 : Math.max(this.pos - 1, 0);
    this.setTransform();
    this.onItemChange.emit(this.pos);
  }

  next() {
    this.pos = this.pos === this.itemCount - 1 ? 0 : Math.min(this.pos + 1, this.itemCount - 1);
    this.setTransform();
    this.onItemChange.emit(this.pos);
  }

  changeItem(index: number) {
    this.onItemChange.emit(index);
  }

  move(index: number) {
    this.pos = index;
    this.setTransform();
    this.onItemChange.emit(this.pos);
  }
}
