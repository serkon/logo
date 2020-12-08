import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorShowcaseComponent } from './cursor-showcase.component';

describe('CursorShowcaseComponent', () => {
  let component: CursorShowcaseComponent;
  let fixture: ComponentFixture<CursorShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CursorShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
