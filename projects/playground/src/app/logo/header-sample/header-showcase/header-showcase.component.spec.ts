import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderShowcaseComponent } from './header-showcase.component';

describe('HeaderShowcaseComponent', () => {
  let component: HeaderShowcaseComponent;
  let fixture: ComponentFixture<HeaderShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
