import { TestBed } from '@angular/core/testing';

import { ImageSliderService } from './image-slider.service';

describe('ImageSliderService', () => {
  let service: ImageSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
