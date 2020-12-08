import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxShowcaseComponent } from './combobox-showcase.component';

describe('ComboboxShowcaseComponent', () => {
  let component: ComboboxShowcaseComponent;
  let fixture: ComponentFixture<ComboboxShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComboboxShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
