import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingShowcaseComponent } from './loading-showcase.component';

describe('LoadingShowcaseComponent', () => {
  let component: LoadingShowcaseComponent;
  let fixture: ComponentFixture<LoadingShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
