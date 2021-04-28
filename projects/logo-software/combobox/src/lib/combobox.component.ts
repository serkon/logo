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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Util } from '@logo-software/core';

/**
 * A ComboBox displays a text box combined with a ListBox, which enables the user to select items
 * from the list or enter a value for filtering this list then can select an item.
 *
 * __Usage Example__
 *
 * ```html
 * <logo-combobox (filter)="onFiltered($event)" (select)="onSelect($event)" [(ngModel)]="selected" [hover]="1" [items]="displayedItems" [path]="'a.b'">
 *   // If you wish to add custom items, please use it similar to the following code sample.
 *   // Or leave blank for the default view.
 *   <ng-template let-item="item" let-index="index" let-isOdd="isOdd" let-isFirst="isFirst" let-isLast="isLast">
 *     <span>customized {{index}} - {{isFirst}} - {{isLast}} - {{isOdd}} - {{item | json }}</span>
 *   </ng-template>
 * </logo-combobox>
 *
 * <div class="selected">
 *   <span class="value">{{selected | json}}</span>
 * </div>
 * ```
 */
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
export class ComboboxComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  @ContentChild(TemplateRef) templateRef = null;
  @ViewChild('itemRef', {read: ElementRef}) itemsRef: ElementRef;
  @ViewChild('inputRef', {static: false, read: ElementRef}) inputRef: ElementRef;
  /**
   * Add placeholder string, default is `Select`
   */
  @Input() placeholder: string = 'Select';
  /**
   * Given data path string which data will be displayed. Default is null.
   * For example `[{a: {b: 1, c: 'tomato'}}, {a: {b: 1, c: 'pepper'}}, ...]` is your data
   * And want to show tomato, pepper as display item, set path to `a.c`
   */
  @Input() path: string = null;
  /**
   * Let users select multiple options from the list. Default is `false`.
   */
  @Input() multiple: boolean = false;
  /**
   * This option let developers to filter the list in the box. Default is `true`.
   */
  @Input() hasFilter: boolean = true;
  /**
   * If you wish to use your own filter algorithm (e.g. server-side filtering) the filter emitter will be called while you typing into the input field.
   * Otherwise if you don't define any filter, it will filter with the default algorithm automatically when you type to input field.
   * In the custom filter method, you must replace `items` with filtered data. It will show only your defined data.
   * For example:
   *
   * ```typescript
   * onFiltered($event) {
   *  // html sample: `<logo-combobox [items]="displayItems" (filter)="onFiltered($event)"></logo-combobox>`
   *  this.displayItems = this.items.filter(item => {
   *    return item["path-of-displayed-text"].includes($event);
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
   * selected item(s)
   */
  public selected: any | any[] = null;
  /**
   * filtered list
   */
  public filtered: any[] = [];
  /**
   * display status of the popover
   */
  public display: boolean = false;
  private timer: number;

  constructor(private elementRef: ElementRef) {
  }

  private _items: any[] = [];

  get items() {
    return this._items;
  }

  /**
   * selectable combobox item list will be displayed in popover
   */
  @Input() set items(values: any[]) {
    this._items = values;
    this.filtered = values;
  }

  private _ngModel: any;

  get ngModel() {
    return this._ngModel;
  }

  /**
   * set initial default value
   * @param value
   */
  @Input() set ngModel(value: any) {
    this._ngModel = value;
  }

  private _hover: number = -1;

  get hover(): number {
    return this._hover;
  }

  /**
   * When popover opened given indexed item will be hovered. Default is `-1`.
   */
  @Input() set hover(value) {
    this._hover = value;
  }

  ngOnInit() {
    this.selected = this.multiple ? this.ngModel && this.ngModel.length > 0 ? this.ngModel : [] : null;
    const first = this.items[0];
    if (this.path && first && !Util.isObject(first)) {
      console.warn('Please set an object or remove path for items on LogoCombobox component');
    } else if (this.multiple && !Array.isArray(this.ngModel)) {
      console.warn('Please set an Array to ngModel on LogoCombobox component');
    } else {
      const index = this.findItemIndex(this.ngModel);
      if (index >= 0) {
        this.setSelectedItem(this.ngModel, index);
      }
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
    this.hover = index;
    if (this.multiple) {
      this.selected.indexOf(item, 0) > -1 ? this.selected.splice(this.selected.indexOf(item, 0), 1) : this.selected.push(item);
    } else {
      this.selected = this.selected === item ? null : item;
    }
    this.ngModelChange.emit(this.selected);
    this.select.emit(this.selected);
    this.focusInputElement();
    if (!this.multiple) {
      this.closeListDiv();
    }
  }

  findItemIndex(item: any): number {
    return this.items.findIndex((i) => item === i);
  }

  findItemByIndex(index: number): any {
    this.setSelectedItem(this.items[index], index);
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
    return this.path && Util.isObject(this.selected) && !Util.isNullOrUndef(this.selected) ? Util.getObjectPathValue(this.selected, this.path) : this.selected ? this.selected : this.placeholder;
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
        return Util.getObjectPathValue(item, this.path).includes(this.search);
        // return item.a.b.includes(this.search);
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

  clearAll() {
    this.selected = this.multiple ? [] : null;
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
