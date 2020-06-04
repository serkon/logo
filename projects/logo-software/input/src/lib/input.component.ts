import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() caption: boolean = false;
  @Input() placeholder: string = null;
  @Input() icon = null;
  @Input() class = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
