import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'logo-cs',
  templateUrl: './cs.component.html',
  styleUrls: ['./cs.component.scss'],
})
export class CsComponent {
  constructor(@Inject(DOCUMENT) private document) {
  }
}
