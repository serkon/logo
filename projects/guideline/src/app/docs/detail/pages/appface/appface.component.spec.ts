import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfaceComponent } from './appface.component';

describe('AppfaceComponent', () => {
  let component: AppfaceComponent;
  let fixture: ComponentFixture<AppfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppfaceComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
