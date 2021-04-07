import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateShowcaseComponent } from './date-showcase.component';

describe('DateShowcaseComponent', () => {
  let component: DateShowcaseComponent;
  let fixture: ComponentFixture<DateShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
