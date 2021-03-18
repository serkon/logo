import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderShowcaseComponent } from './image-slider-showcase.component';

describe('ImageSliderShowcaseComponent', () => {
  let component: ImageSliderShowcaseComponent;
  let fixture: ComponentFixture<ImageSliderShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageSliderShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSliderShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
