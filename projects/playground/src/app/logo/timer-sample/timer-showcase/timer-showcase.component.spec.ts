import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerShowcaseComponent } from './timer-showcase.component';

describe('TimerShowcaseComponent', () => {
  let component: TimerShowcaseComponent;
  let fixture: ComponentFixture<TimerShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
