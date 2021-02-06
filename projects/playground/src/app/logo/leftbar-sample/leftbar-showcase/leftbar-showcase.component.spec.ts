import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarShowcaseComponent } from './leftbar-showcase.component';

describe('LeftbarShowcaseComponent', () => {
  let component: LeftbarShowcaseComponent;
  let fixture: ComponentFixture<LeftbarShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftbarShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
