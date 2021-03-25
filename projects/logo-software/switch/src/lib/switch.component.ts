import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logo-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  @Input() size: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
