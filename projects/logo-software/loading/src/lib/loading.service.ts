import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loadingWatcher = new BehaviorSubject<boolean>(true);
  isLoading = this.loadingWatcher.asObservable();

  private _status: boolean = false;

  get status() {
    return this._status;
  }

  set status(loadingStatus: boolean) {
    this._status = loadingStatus;
    this.loadingWatcher.next(loadingStatus);
  }
}
