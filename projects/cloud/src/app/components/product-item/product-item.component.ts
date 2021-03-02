import { Component, Input, OnInit } from '@angular/core';
import { ProductSummary } from '../../../models/interfaces';

@Component({
  selector: 'logo-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productData: ProductSummary;

  constructor() {
  }

  ngOnInit(): void {
  }

}
