import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DynamicService } from '@logo-software/dynamic';

@Component({
  selector: 'logo-markdown',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class MarkdownComponent implements OnChanges, AfterViewInit {

  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;
  @Input() url = '/assets/docs/abc.md';
  public string!: SafeHtml;

  constructor(private dynamicService: DynamicService, private http: HttpClient, private sanitize: DomSanitizer) {
  }

  async ngOnChanges(changes: SimpleChanges) {
    console.log(this.url);
  }

  async ngAfterViewInit() {
    this.string = await this.resolve();
    this.container.createComponent(this.dynamicService.factory(this.string));
  }

  async resolve() {
    return this.convertToHtml(await this.getFile());
  }

  convertToHtml(content): string {
    const md = marked.setOptions();
    return md.parse(content);
  }

  getFile(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url, {responseType: 'text'}).subscribe((v) => {
        resolve(v);
      });
    })
  }

}
