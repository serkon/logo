import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'logo-tab',
  template: `
    <ng-container *ngIf="isActive">
      <div class="pane" (click)="htmlClick()">
        <ng-content></ng-content>
      </div>
    </ng-container>
  `,
  styleUrls: ['tab.component.scss'],
})
export class TabComponent implements AfterViewInit {
  @Input() isActive: boolean = false;
  @Input() title: string;
  @Input() route: string;
  @Input() fragment: string;
  @Output() init: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();
  @Output() click: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.init.emit(this);
  }

  htmlClick() {
    event.stopPropagation();
    this.click.emit(this);
  }

}
