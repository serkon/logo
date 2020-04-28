import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/**
 * Usage Example
 * @Component()
 * export class TestComponent extends OnInit {
 *     private watcher = new WatcherService();
 *
 *     constructor(){
 *      const success = (value) => console.log('success triggered: ', value);
 *      const error = (error) => console.log('error triggered: ', error);
 *      const complete = (complete) => console.log('complete triggered: ', complete);
 *      this.watcher.debounce(100).subscribe(success, error, complete);
 *     }
 *
 *     ngOnInit(){
 *        // some event when triggered
 *        this.watcher.next('some value');
 *     }
 *
 *     ngOnDestroy(){
 *       this.watcher.unsubscribe();
 *     }
 * }
 */

@Injectable()
export class WatcherService {
  public subject: Subject<any> = new Subject<any>();

  debounce(time?: number) {
    return this.subject.pipe(debounceTime(time));
  }

  next(value?: any) {
    this.subject.next(value);
  }

  subscribe(success: (value: any) => void, error?: (error: any) => void, complete?: () => void) {
    return this.subject.subscribe(success, error, complete);
  }

  unsubscribe() {
    return this.subject.unsubscribe();
  }

  completed() {
    return this.subject.complete();
  }
}
