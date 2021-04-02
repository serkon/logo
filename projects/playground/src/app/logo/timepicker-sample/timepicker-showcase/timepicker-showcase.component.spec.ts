import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerShowcaseComponent } from './timepicker-showcase.component';

describe('TimepickerShowcaseComponent', () => {
  let component: TimepickerShowcaseComponent;
  let fixture: ComponentFixture<TimepickerShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimepickerShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
