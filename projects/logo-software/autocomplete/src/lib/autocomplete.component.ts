import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Util } from '@logo-software/core';

/**
 * A Autocomplete displays a ListBox related to the input, which enables the user to select items
 * from the list or enter a value for filtering this list then can select an item.
 *
 * __Usage Example__
 *
 * ```html
 * <logo-autocomplete (filter)="onFiltered($event)" (select)="onSelect($event)" [(ngModel)]="selected" [hover]="1" [items]="displayedItems" [path]="'a.b'">
 *   // If you wish to add custom items, please use it similar to the following code sample.
 *   // Or leave blank for the default view.
 *   <ng-template let-item="item" let-index="index" let-isOdd="isOdd" let-isFirst="isFirst" let-isLast="isLast">
 *     <span>customized {{index}} - {{isFirst}} - {{isLast}} - {{isOdd}} - {{item | json }}</span>
 *   </ng-template>
 * </logo-autocomplete>
 * ```
 */
@Component({
  selector: 'logo-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true,
  }],
})
export class AutocompleteComponent implements OnInit, AfterViewInit {

  @ContentChild(TemplateRef) templateRef = null;
  @ViewChild('itemRef', {read: ElementRef}) itemsRef: ElementRef;
  @ViewChild('inputRef', {static: false, read: ElementRef}) inputRef: ElementRef;
  /**
   * Add placeholder string, default is `Please Enter Your Search`
   */
  @Input() placeholder: string = 'Please Enter Your Search';
  /**
   * Given data path string which data will be displayed. Default is null.
   * For example `[{a: {b: 1, c: 'tomato'}}, {a: {b: 1, c: 'pepper'}}, ...]` is your data
   * And want to show tomato, pepper as display item, set path to `a.c`
   */
  @Input() path: string = null;
  /**
   * When popover opened given indexed item will be hovered. Default is `-1`.
   */
  @Input() hover: number = -1;
  /**
   * Allows user to make multiple selection from list
   */
  @Input() multiple: boolean = false;
  @Input() ngModel: string;
  /**
   * If you use your custom filter (e.g. server-side filtering) filter even emitter called when input entered.
   * In the Custom filter method, you must replace `items` with filtered data. For example:
   *
   * ```typescript
   * onFiltered($event) {
   *  // html sample: `<logo-combobox [items]="displayItems" (filter)="onFiltered($event)"></logo-combobox>`
   *  this.displayItems = this.items.filter(item => {
   *    return item.a.b.includes($event);
   *  });
   * }
   * ```
   */
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  /**
   * `select` event emitter is triggered when the user selects an item. It sends the selected item to the method as a parameter.
   */
  @Output() select: EventEmitter<any> = new EventEmitter<any>();
  @Output() ngModelChange = new EventEmitter();
  /**
   * search string while filtering
   */
  public search: string = '';
  /**
   * selected item
   */
  public selectedItem: any = null;
  /**
   * selected items if multiple true
   */
  public selectedItems: any[] = [];
  /**
   * filtered list
   */
  public filtered: any[] = [];
  /**
   * display status of the popover
   */
  public display: boolean = false;
  public showInput: boolean = true;
  private timer: number;

  constructor(private elementRef: ElementRef) {
  }

  _items: any[] = [];

  /**
   * autocomplete item list will be displayed
   */
  get items() {
    return this._items;
  }

  @Input() set items(values: any[]) {
    this._items = values;
    this.filtered = values;
  }

  _selected: number = null;

  /**
   * Sets selected item with item index in the list
   * for example: `[selected]="1"`
   */
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

  @HostListener('document:click', ['$event'])
  public onClick(event: Event) {
    const contains = this.elementRef.nativeElement.contains(event.target);
    if (!contains) {
      this.closeListDiv();
    }
  }

  setSelectedItem(item, index) {
    this.multiple ? this.selectedItems.indexOf(item, 0) > -1 ? this.selectedItems.splice(this.selectedItems.indexOf(item, 0), 1) : this.selectedItems.push(item) : this.selectedItem = item;
    this.hover = index;
    this.ngModelChange.emit(item);
    this.select.emit(item);
    !this.multiple ? this.showInput = false : this._items.length === this.selectedItems.length ? this.showInput = false : this.showInput = true;
    if (this.showInput) {
      this.focusInputElement();
    }
    if (!this.multiple) {
      this.closeListDiv();
    }
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
      this.filterTrigger();
    }, 600);
  }

  cloneArray(items) {
    return items.map(item => Array.isArray(item) ? this.cloneArray(item) : item);
  }

  filterTrigger() {
    this.filter.next(this.search);
    // If observer length equals zero this means the user does not define the filter output method and it will filter on the client-side.
    // But will still have been sent search criteria to Combobox.
    if (this.filter.observers.length <= 0) {
      this.filtered = this.items.filter(item => {
        return item.a.b.includes(this.search);
      });
    }
  }

  closeListDiv() {
    window.setTimeout(() => {
      this.display = false;
      if (this.search.length > 0) {
        this.search = '';
        this.filterTrigger();
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

  removeSelectedItem() {
    this.selectedItem = null;
    this.selected = null;
    this.showInput = true;
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
