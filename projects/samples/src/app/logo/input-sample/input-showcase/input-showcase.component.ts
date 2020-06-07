import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'logo-input-showcase',
  templateUrl: './input-showcase.component.html',
  styleUrls: ['./input-showcase.component.scss'],
})
export class InputShowcaseComponent implements OnInit, AfterViewInit {
  public quotes;
  public links;
  private readonly bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.bodyHeight = this.document.body.clientHeight;
    this.quotes = [
      {story: 'People ignore design that ignores people', author: 'FRANK CHIMERO'},
      {story: 'Good designs come from the heart, not from the brain', author: 'DANNY SENGERS'},
    ];
    this.links = {
      one: [],
      four: [
        {url: '#', display: 'Corporate'},
        {url: '#', display: 'Contact'},
        {url: '#', display: 'Blog'},
        {url: '#', display: 'Carier'},
      ],
      footer: {
        socials: [{url: '#', display: 'twitter'}, {url: '#', display: 'facebook'}, {url: '#', display: 'youtube'}],
        terms: [
          {url: '#', display: 'Copyright'},
          {url: '#', display: 'Terms of Use'},
          {url: '#', display: 'Privacy'},
          {url: '#', display: 'Personal Data'},
          {url: '#', display: 'Cookie Policy'},
        ],
      },
    };
  }

  private _sections: HTMLElement[] = [];

  get sections() {
    return this._sections;
  }

  set sections(value) {
    this._sections = value;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sections = this.document.querySelectorAll('section');
    this.sections.forEach(section => {
      section.style.minHeight = `${this.bodyHeight}px`;
    });
  }

}
