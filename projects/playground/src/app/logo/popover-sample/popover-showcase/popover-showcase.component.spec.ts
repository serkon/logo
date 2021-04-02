import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverShowcaseComponent } from './popover-showcase.component';

describe('PopoverShowcaseComponent', () => {
  let component: PopoverShowcaseComponent;
  let fixture: ComponentFixture<PopoverShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
