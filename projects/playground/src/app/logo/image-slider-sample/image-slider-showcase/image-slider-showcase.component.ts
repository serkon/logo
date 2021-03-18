import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-image-slider-showcase',
  templateUrl: './image-slider-showcase.component.html',
  styleUrls: ['./image-slider-showcase.component.scss'],
})
export class ImageSliderShowcaseComponent implements OnInit {

  public items: string[] = [
    'https://isbasi.com/images/mobil-detay.jpg',
    'https://isbasi.com/images/fatura-takibi-detay.jpg',
    'https://isbasi.com/images/e-fatura-detay.jpg',
  ];

  public captions: string[] = [
    'Sample Caption 1',
    'Sample Caption 2',
    'Sample Caption 3',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public sampleChangeEvent($event) {
    console.log('Image Slider Position Is:' + $event);
  }

}
