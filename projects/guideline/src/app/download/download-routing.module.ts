import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DownloadComponent} from '@guideline/src/app/download/download.component';

const routes: Routes = [
  {
    path : 'download',
    component : DownloadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadRoutingModule { }
