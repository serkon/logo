import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageShowcaseComponent } from './language-showcase.component';

describe('LanguageShowcaseComponent', () => {
  let component: LanguageShowcaseComponent;
  let fixture: ComponentFixture<LanguageShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
