import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'logo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public productId: string;

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params.slug;
  }

  ngOnInit(): void {
  }
}
