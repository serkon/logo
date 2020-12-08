import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelShowcaseComponent } from './excel-showcase.component';

describe('ExcelShowcaseComponent', () => {
  let component: ExcelShowcaseComponent;
  let fixture: ComponentFixture<ExcelShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
