import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveShowcaseComponent } from './perspective-showcase.component';

describe('PerspectiveShowcaseComponent', () => {
  let component: PerspectiveShowcaseComponent;
  let fixture: ComponentFixture<PerspectiveShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerspectiveShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
