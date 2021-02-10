import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerShowcaseComponent } from './datepicker-showcase.component';

describe('DatepickerShowcaseComponent', () => {
  let component: DatepickerShowcaseComponent;
  let fixture: ComponentFixture<DatepickerShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
