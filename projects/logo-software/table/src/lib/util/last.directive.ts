/*
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Emits method when ngFor loop is access to last item
 *
 * __Usage Example:__
 *
 * ```html
 * <ul>
 *   <li *ngFor="let item of data; let last=last;" [isLast]="last" (isLastEmitter)="isLastEmitter(item)">
 *     {{item.zone.name}}
 *   </li>
 * </ul>
 * ```
 *
 * __Component:__
 *
 * ```typescript
 * @Component({
 *  selector: 'lbs-root',
 *  templateUrl: './app.component.html',
 *  styleUrls: ['./app.component.scss']
 * })
 * export class AppComponent {
 *   public data = ['İstanbul', 'Ankara', 'Çorum', 'Adana', 'Kırıkkale', 'Çankırı', 'Yozgat'];
 *
 *   isLastEmitter(item: any) {
 *    console.log(item);
 *  }
 * }
 * ```
 */
@Directive({selector: '[isLast]'})
export class LastDirective implements OnInit {
  @Input() isLast: boolean;
  @Output() isLastEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    if (this.isLast) {
      this.isLastEmitter.emit(true);
    }
  }
}
