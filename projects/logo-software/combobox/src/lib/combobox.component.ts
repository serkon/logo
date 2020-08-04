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
import { Util } from '@logo-software/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @ViewChild('inputRef', {read: ElementRef}) inputRef: ElementRef;
  @Input() placeholder: string = 'select';
  @Input() items: any[] = [];
  @Input() path: string = null;
  @Input() hover: number = -1;
  public search: string = null;
  public selectedItem: any = null;
  public filtered: any[] = [];
  public display: boolean = false;
  @Input() ngModel: string;
  @Output() private ngModelChange = new EventEmitter();

  constructor(private elementRef: ElementRef) {
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
    this.filtered = this.items;
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
    // event.preventDefault();
    this.selectedItem = item;
    this.hover = index;
    this.ngModelChange.emit(item);
    this.focusInputElement();
    // this.closeItems();
  }

  openListDiv() {
    this.display = !this.display;
    this.focusInputElement();
    this.scroll();
  }

  closeListDiv() {
    window.setTimeout(() => this.display = false, 10);
  }

  /**
   * It moves hovered item to up
   */
  arrowUp() {
    this.hover--;
    this.hover = this.hover >= 0 ? this.hover : this.filtered.length - 1;
    this.scroll();
  }

  /**
   * It moves hovered item to down
   */
  arrowDown() {
    this.hover++;
    this.hover = this.hover < this.filtered.length ? this.hover : 0;
    this.scroll();
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

  optionHTML(item, index) {
    const isObject = Util.isObject(item);
    return (this.path && isObject) ? Util.getObjectPathValue(item, this.path) || '' : item;
  }

  selectedHTML() {
    return this.path && Util.isObject(this.selectedItem) && !Util.isNullOrUndef(this.selectedItem) ? Util.getObjectPathValue(this.selectedItem, this.path) : this.selectedItem ? this.selectedItem : this.placeholder;
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
