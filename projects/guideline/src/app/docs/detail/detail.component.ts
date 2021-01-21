import { AfterViewInit, Compiler, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DocsService } from '../docs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, AfterViewInit {

  public component;

  constructor(private compiler: Compiler, public docsService: DocsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramChanges();
  }

  ngAfterViewInit() {
  }

  paramChanges() {
    this.route.paramMap.subscribe(params => {
      this.component = params.get('name');
    });
  }
}
