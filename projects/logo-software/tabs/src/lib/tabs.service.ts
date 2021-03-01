import { EventEmitter, Injectable } from '@angular/core';

import { TabComponent } from './tab.component';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  public tabs: TabComponent[];
  public active: number;
  public $changeTab: EventEmitter<number> = new EventEmitter<number>();
}
