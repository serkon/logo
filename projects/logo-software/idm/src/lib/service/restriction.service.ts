import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { StorageClass } from '@logo-software/storage';
import { IdmService } from '../idm.service';

@Injectable({
  providedIn: 'root',
})
export class RestrictionService implements CanActivate {

  constructor(private idmService: IdmService) {
  }

  public async canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
    const token = StorageClass.getItem('token');
    this.idmService.url = routerStateSnapshot.url;
    return await this.idmService.validateToken(token);
  }
}
