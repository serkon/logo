/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

/**
 * Markdown based content loader components. It will convert md text to html formatted and styled text.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 *   <logo-markdown url="'/assets/docs/getstarted.md'"></logo-markdown>
 * ```
 */
@Component({
  selector: 'logo-markdown',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class MarkdownComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;
  /**
   * loads md formatted content from url, default is undefined
   * @Input() url = '/assets/docs/getstarted.md'
   */
  @Input() url;
  /**
   * md formatted text will be shown
   */
  @Input() string: string = '';
  private dataChange = false;
  private viewInit = false;
  private viewInit$: Subject<{ change?, ready? }> = new Subject<{ change?, ready? }>();

  constructor(private http: HttpClient) {
    this.viewInit$.subscribe(({change, ready}) => {
      if (change && ready) {
        this.container.clear();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataChange = false;
    this.init();
  }

  ngAfterViewInit() {
    this.viewInit = true;
    this.viewInit$.next({ready: true});
  }

  ngOnDestroy() {
    this.viewInit$.unsubscribe();
  }

  async init() {
    if (this.url) {
      this.string = await this.resolve();
    }
    this.dataChange = true;
    this.viewInit$.next({change: this.dataChange, ready: this.viewInit});
  }

  async resolve() {
    return this.convertToHtml(await this.getFile());
  }

  convertToHtml(markdown): string {
    const md = marked.setOptions({
      gfm: true,
      langPrefix: 'hljs ',
      highlight: (code) => this.highlight(code),
    });
    return md.parse(markdown.trim());
  }

  public highlight(code: string): string {
    return hljs.highlightAuto(code).value;
  }

  getFile(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url, {responseType: 'text'}).subscribe((v) => {
        resolve(v);
      });
    });
  }
}
