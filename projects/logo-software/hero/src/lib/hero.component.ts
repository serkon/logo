import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logo-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() cssClasses: string = 'hero-main';
  @Input() containerStatus: boolean = false;
  @Input() bgImage?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
