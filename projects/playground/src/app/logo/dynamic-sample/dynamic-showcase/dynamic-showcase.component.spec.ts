import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicShowcaseComponent } from './dynamic-showcase.component';

describe('DynamicShowcaseComponent', () => {
  let component: DynamicShowcaseComponent;
  let fixture: ComponentFixture<DynamicShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
