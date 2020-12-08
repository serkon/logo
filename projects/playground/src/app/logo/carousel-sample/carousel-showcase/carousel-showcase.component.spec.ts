import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselShowcaseComponent } from './carousel-showcase.component';

describe('CarouselShowcaseComponent', () => {
  let component: CarouselShowcaseComponent;
  let fixture: ComponentFixture<CarouselShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
