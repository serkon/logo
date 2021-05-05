import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'logo-core-services',
  templateUrl: './core-services.component.html',
  styleUrls: ['./core-services.component.scss'],
})
export class CoreServicesComponent {
  @Input() buttonColor: string = 'success';
  @Input() backgroundColor: string = '#fff2d5';
  @HostBinding('style.background') bg = this.backgroundColor;
}
