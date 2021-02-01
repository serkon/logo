import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DownloadRoutingModule} from './download-routing.module';
import {DownloadComponent} from './download.component';
import {HomeModule} from './../home/home.module';

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    HomeModule,
  ],
  exports: [DownloadComponent],
})
export class DownloadModule {

}
