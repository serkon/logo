import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  menu: boolean = true;
  opener: boolean = true;
  toggle = new Subject();
}
