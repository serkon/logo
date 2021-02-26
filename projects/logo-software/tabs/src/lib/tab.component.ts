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
  /**
   * Tab will be active if set true, default is false
   */
  @Input() isActive: boolean = false;
  /**
   * display text will be visible for click
   */
  @Input() title: string;
  /**
   * redirection address will be load
   */
  @Input() route: string;
  /**
   * a collection of matrix and query URL parameters.
   */
  @Input() params: string;
  /**
   * Fragment uses to redirection to the anchor.
   * For example, the fragment must be set to `section` for direction to `http://domain.com/#section`
   */
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
