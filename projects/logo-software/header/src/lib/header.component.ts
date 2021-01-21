import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'logo-header',
  template: `
    <div class="lde-header {{headerType}}" [ngClass]="headerFunction">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerType: string = 'minimized';
  public headerFunction: string;

  constructor(private headerController: HeaderService) {
  }

  ngOnInit(): void {
  }

}
