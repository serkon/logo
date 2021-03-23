import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarShowcaseComponent } from './progress-bar-showcase.component';

describe('ProgressBarShowcaseComponent', () => {
  let component: ProgressBarShowcaseComponent;
  let fixture: ComponentFixture<ProgressBarShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
