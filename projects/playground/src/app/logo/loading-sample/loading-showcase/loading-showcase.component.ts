import { Component, OnInit } from '@angular/core';

import { LoadingService } from '@logo-software/loading';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'logo-loading-showcase',
  templateUrl: './loading-showcase.component.html',
  styleUrls: ['./loading-showcase.component.scss'],
})
export class LoadingShowcaseComponent implements OnInit {

  constructor(private loadingService: LoadingService, private http: HttpClient) {
    // this.loadingService.status = true;
  }

  ngOnInit(): void {
    /* window.setTimeout(()=> {
      this.loadingService.status = false;
      console.log(this.loadingService.isLoading);
    }, 10000);*/
    this.http.get(
      'http://api.plos.org/search?q=title:DNA',
    ).subscribe((data) => {
      console.log(data);
    });
  }

}
