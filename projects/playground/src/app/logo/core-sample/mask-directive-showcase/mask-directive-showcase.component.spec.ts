import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskDirectiveShowcaseComponent } from './mask-directive-showcase.component';

describe('MaskDirectiveShowcaseComponent', () => {
  let component: MaskDirectiveShowcaseComponent;
  let fixture: ComponentFixture<MaskDirectiveShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskDirectiveShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskDirectiveShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
