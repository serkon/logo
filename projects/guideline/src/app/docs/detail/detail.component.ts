import { AfterViewInit, Compiler, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeaderService } from '@guideline/src/app/components/header/header.service';
import { DocsService } from '../docs.service';
import { SampleModule } from '@guideline/src/app/components/play/sample/sample.module';
import { SampleComponent } from '@guideline/src/app/components/play/sample/sample.component';

@Component({
  selector: 'logo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, AfterViewInit {

  public component;

  constructor(private compiler: Compiler, public docsService: DocsService, private headerService: HeaderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramChanges();
  }

  ngAfterViewInit() {
  }

  paramChanges() {
    this.route.paramMap.subscribe(params => {
      this.component = params.get('name');
      this.headerService.setHeaderTitle(this.component);
    });
  }
}
