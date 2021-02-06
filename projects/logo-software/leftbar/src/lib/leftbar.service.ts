import { Injectable } from '@angular/core';
import { PaasUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class LeftbarService {
  public userInfo: PaasUser = null;

  constructor() {
  }

  public selectTanent(id: string) {
    console.log(id);
  }
}
