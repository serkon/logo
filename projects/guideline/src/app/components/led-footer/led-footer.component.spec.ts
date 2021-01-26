import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedFooterComponent } from './led-footer.component';

describe('LedFooterComponent', () => {
  let component: LedFooterComponent;
  let fixture: ComponentFixture<LedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LedFooterComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
