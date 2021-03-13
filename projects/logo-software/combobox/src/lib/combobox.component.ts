import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Util } from '@logo-software/core';

@Component({
  selector: 'logo-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ComboboxComponent),
    multi: true,
  }],
})
export class ComboboxComponent implements OnInit, AfterViewInit, OnChanges, ControlValueAccessor {
  @ContentChild(TemplateRef) templateRef = null;
  @ViewChild('itemRef', {read: ElementRef}) itemsRef: ElementRef;
  @ViewChild('inputRef', {static: false, read: ElementRef}) inputRef: ElementRef;
  @Input() placeholder: string = 'select';
  @Input() path: string = null;
  @Input() hover: number = -1;
  @Input() ngModel: string;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @Output() ngModelChange = new EventEmitter();
  public search: string = '';
  public selectedItem: any = null;
  public filtered: any[] = [];
  public display: boolean = false;
  private timer: number;

  constructor(private elementRef: ElementRef) {
  }

  _items: any[] = [];

  get items() {
    return this._items;
  }

  @Input() set items(values: any[]) {
    this._items = values;
    this.filtered = values;
  }

  _selected: number = null;

  get selected(): number {
    return this._selected;
  }

  @Input() set selected(value) {
    this._selected = value;
    this.hover = value;
    const selected = this.items[value];
    if (typeof selected !== 'undefined') {
      this.setSelectedItem(selected, value);
    }
  }

  ngOnInit() {
    const first = this.items[0];
    if (this.path && first && !Util.isObject(first)) {
      console.warn('Please set an object or remove path for items');
    }
  }

  ngAfterViewInit() {
    this.scroll();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  @HostListener('document:click', ['$event'])
  public onClick(event: Event) {
    const contains = this.elementRef.nativeElement.contains(event.target);
    if (!contains) {
      this.closeListDiv();
    }
  }

  setSelectedItem(item, index) {
    this.selectedItem = item;
    this.hover = index;
    this.ngModelChange.emit(item);
    this.focusInputElement();
    this.closeListDiv();
  }

  arrowUp() {
    this.hover--;
    this.hover = this.hover >= 0 ? this.hover : this.filtered.length - 1;
    this.scroll();
  }

  arrowDown() {
    this.hover++;
    this.hover = this.hover < this.filtered.length ? this.hover : 0;
    this.scroll();
  }

  optionHTML(item, index) {
    const isObject = Util.isObject(item);
    return (this.path && isObject) ? Util.getObjectPathValue(item, this.path) || '' : item;
  }

  selectedHTML() {
    return this.path && Util.isObject(this.selectedItem) && !Util.isNullOrUndef(this.selectedItem) ? Util.getObjectPathValue(this.selectedItem, this.path) : this.selectedItem ? this.selectedItem : this.placeholder;
  }

  openListDiv() {
    this.display = !this.display;
    this.focusInputElement();
    this.scroll();
  }

  debounce(element: HTMLInputElement) {
    // return fromEvent(element, 'keyup').pipe(debounceTime(600)).subscribe(val => this.filterTrigger(val));
    this.search = element.value;
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.filterTrigger(event);
    }, 600);
  }

  filterTrigger(event) {
    this.filter.next(this.search);
  }

  closeListDiv() {
    window.setTimeout(() => {
      this.display = false;
      if (this.search.length > 0) {
        this.search = '';
        this.filter.next(this.search);
      }
    }, 10);
  }

  scroll() {
    if (this.display && this.hover >= 0 && this.hover <= this.filtered.length) {
      window.setTimeout(() => {
        this.itemsRef.nativeElement.children[this.hover].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 50);
    }
  }

  focusInputElement() {
    window.setTimeout(() => {
      if (this.inputRef) {
        this.inputRef.nativeElement.focus();
      }
    }, 100);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  /* optional */
  setDisabledState(isDisabled: boolean): void {
  }
}
