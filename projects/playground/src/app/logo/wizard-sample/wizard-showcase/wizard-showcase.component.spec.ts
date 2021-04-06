import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardShowcaseComponent } from './wizard-showcase.component';

describe('WizardShowcaseComponent', () => {
  let component: WizardShowcaseComponent;
  let fixture: ComponentFixture<WizardShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WizardShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
