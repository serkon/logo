import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  @Input() classes: string;
  @Input() disabled: boolean = false;
  @Input() rounded: boolean = true;
  toggleState: boolean = false;

  public toggle() {
    if (!this.disabled) {
      this.toggleState = !this.toggleState;
    }
  }
}
