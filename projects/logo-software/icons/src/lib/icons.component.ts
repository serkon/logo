import { Component, OnInit } from '@angular/core';
import { LOGO_ICONS } from './logo-icons';

@Component({
  selector: 'logo-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  icons: string[];
  filter: string;
  filtered: string[];
  clipboard: string;

  constructor() {
    this.icons = LOGO_ICONS;
    this.filtered = this.icons;
  }

  ngOnInit(): void {
  }

  onFilter(value: string) {
    this.filtered = this.icons.filter(item => item.includes(value));
    console.log(this.filtered);
  }

  /**
   * Copy any text to clipboard
   * @param text - The text which will be copied
   */
  copyToClipboard(text: any) {
    this.clipboard = text;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text || (<any> event).target.innerText;
    tempInput.select();
    document.execCommand('copy');
    tempInput.remove();
  }
}
