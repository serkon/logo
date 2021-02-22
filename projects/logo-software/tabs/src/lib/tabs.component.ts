import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';

import { TabComponent } from './tab.component';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'logo-tabs',
  template: `
    <ul class="nav nav-tabs {{class}}">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.isActive">
        <logo-link
          [classes]="['ghost', tab.isActive?'selected':'']"
          [url]="tab.route"
          fragment="{{tab.fragment}}"
        >
          {{tab.title}}
        </logo-link>
      </li>
    </ul>
    <div class="tab-line" *ngIf="!routing"></div>
    <div class="tabs">
      <ng-content></ng-content>
    </div>
    <div class="tabs" *ngIf="routing">
      <ng-content></ng-content>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @Input() activeTab: number = 0;
  @Input() class: string;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() routing: boolean = false;
  @Output() change: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();
  @Output() tabEvent: EventEmitter<QueryList<TabComponent>> = new EventEmitter<QueryList<TabComponent>>();

  constructor(private router: Router) {
  }

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.isActive);
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.setActiveTab(this.activeTab);
    }
    this.tabs.changes.pipe(delay(0)).subscribe((changes: QueryList<TabComponent>) => {
      setTimeout(() => {
        this.tabEvent.emit(changes);
      }, 0);
    });
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach((item: TabComponent) => {
      item.isActive = false;
    });
    // activate the tab the user has clicked on.
    tab.isActive = true;
    // switch trigger
    this.change.emit(tab);
    if (this.routing && !!tab.route) {
      setTimeout(() => {
        // this.router.navigate([tab.route], {fragment: tab.fragment});
      }, 0);
    }
  }

  setActiveTab(index: number) {
    this.selectTab(this.tabs.toArray()[index]);
  }
}
