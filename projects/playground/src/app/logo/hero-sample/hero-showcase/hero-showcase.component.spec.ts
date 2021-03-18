import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroShowcaseComponent } from './hero-showcase.component';

describe('HeroShowcaseComponent', () => {
  let component: HeroShowcaseComponent;
  let fixture: ComponentFixture<HeroShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
