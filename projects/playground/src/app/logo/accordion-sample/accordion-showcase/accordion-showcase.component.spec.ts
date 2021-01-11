import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionShowcaseComponent } from './accordion-showcase.component';

describe('AccordionShowcaseComponent', () => {
  let component: AccordionShowcaseComponent;
  let fixture: ComponentFixture<AccordionShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
