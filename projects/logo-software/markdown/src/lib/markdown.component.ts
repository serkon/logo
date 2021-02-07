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
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

import { DynamicService } from '@logo-software/dynamic';
import { Subject } from 'rxjs';

@Component({
  selector: 'logo-markdown',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class MarkdownComponent implements OnChanges, AfterViewInit, OnDestroy {

  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;
  /**
   * @Input() url = '/assets/docs/getstarted.md'
   */
  @Input() url;
  @Input() string: string = '';
  private dataChange = false;
  private viewInit = false;
  private viewInit$: Subject<{ change?, ready? }> = new Subject<{ change?, ready? }>();

  constructor(private dynamicService: DynamicService, private http: HttpClient, private sanitize: DomSanitizer) {
    this.viewInit$.subscribe(({change, ready}) => {
      if (change && ready) {
        this.container.clear();
        const componentRef = this.container.createComponent(this.dynamicService.factory(this.string));
        // const componentNode = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
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
