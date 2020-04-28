import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Removes html tags from given HTML string. It inserts each text into a span tag.
 *
 * __Usage Example__
 *
 * ```html
 * <div class="text" [appHtmlParser]="html" [removeEmptyTagList]="['p', 'strong', 'ol', 'ul', 'li', 'em']"></div>
 * ```
 */
@Directive({
  selector: '[htmlParser]',
})
export class HTMLParserDirective implements OnInit {
  /**
   * If true texts will insert into span tag. Default value is true.
   */
  @Input() span = true;
  /**
   * Given tag list will be removed if tag content is empty.
   */
  @Input() removeEmptyTagList: string[] = ['p', 'strong', 'ol', 'ul', 'li', 'em'];
  /**
   * When parsed HTML element was clicked this method will be triggered.
   */
  @Output() htmlParserEmitter: EventEmitter<{ element, index }> = new EventEmitter<{ element, index }>();
  wordIndex = 0;
  rawHTML = null;
  formattedText = '';

  constructor(private elementRef: ElementRef) {
  }

  @Input() set appHtmlParser(value: string) {
    if (value) {
      this.rawHTML = value;
      this.init();
    } else {
      this.pushToElementRef('');
    }
  }

  ngOnInit() {
    if (this.rawHTML) {
      this.init();
    }
  }

  init() {
    this.formattedText = this.start(this.removeEmptyTags(this.rawHTML).trim(), this.removeEmptyTagList);
    this.pushToElementRef(this.formattedText);
    this.setEvents();
  }

  textToHTML(text: string) {
    return new DOMParser().parseFromString(text, 'text/html');
  }

  pushToElementRef(text: string) {
    this.elementRef.nativeElement.innerHTML = this.textToHTML(text).body.innerHTML;
  }

  setEvents() {
    this.elementRef.nativeElement.querySelectorAll('span').forEach((item, key) =>
      item.addEventListener('click', () => this.htmlParserEmitter.emit({
        element: item,
        index: key,
      })));
  }

  addTagWithSpace(text: string) {
    return text.replace(/<(.+?)>/ig, (tag) => (' ' + tag + ' '));
  }

  replaceEnterCharWithSpace(text: string) {
    return text.replace(/[\r\n\s]+/g, ' ');
  }

  removeEmptyTags(text: string) {
    return text.replace(/<p>\s*(<br\s*\/?\s*>)?\s*<\/p>/ig, '');
  }

  f(tags, value) {
    const index = this.findClosingTagIndex(tags, value) !== -1 ? this.findClosingTagIndex(tags, value) :
      this.findOpeningTagIndex(tags, value);
    let fixed = '';
    if (this.findClosingTagIndex(tags, value) !== -1) {
      fixed = '</' + tags[index] + '>' + this.createSpan(value);
    } else if (this.findOpeningTagIndex(tags, value) !== -1) {
      fixed = '<' + tags[index] + '>' + this.createSpan(value);
    } else {
      fixed = this.createSpan(value);
    }
    return fixed;
  }

  findClosingTagIndex(tags, value) {
    return tags.map((tag) => {
      return new RegExp('/' + tag + '\w*>', 'ig').test(value);
    }).indexOf(true);
  }

  findOpeningTagIndex(tags, value) {
    return tags.map((tag) => {
      return new RegExp(tag + '\w*>', 'ig').test(value);
    }).indexOf(true);
  }

  createSpan(value) {
    const matched = value.match(/.*?>(.*)|(.*)/);
    let word = '';
    if (matched[1]) {
      word = matched[1].replace('>', '&gt;').replace('<', '&lt;').trim();
    } else if (matched[2]) {
      word = matched[2].trim();
    }
    if (word.length > 0) {
      return word.split(' ').map(item => {
        const text = this.span ? '<span class=\'index-' + this.wordIndex + '\'>' + item + '</span>' : `${item} `;
        this.wordIndex++;
        return text;
      }).join('');
    }
    return word;
  }

  start(string, array = null) {
    return array ? string.split('<').filter((val) => {
      return val.length > 0;
    }).map((val) => {
      return this.f(array, val);
    }).join('').replace(/[\r\n\s]+/g, ' ') : string.split('<').map((d) => {
      return d.split('>').pop();
    }).join('').replace(/[\r\n\s]+/g, ' ');
  }
}
