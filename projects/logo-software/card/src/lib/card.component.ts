import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardImage?: string;
  @Input() cssClasses?: string = 'card-base';
  @Input() hideCTA: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
