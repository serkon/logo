import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteShowcaseComponent } from './autocomplete-showcase.component';

describe('AutocompleteShowcaseComponent', () => {
  let component: AutocompleteShowcaseComponent;
  let fixture: ComponentFixture<AutocompleteShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
