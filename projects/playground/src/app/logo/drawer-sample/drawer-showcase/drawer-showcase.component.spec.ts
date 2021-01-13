import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerShowcaseComponent } from './drawer-showcase.component';

describe('DrawerShowcaseComponent', () => {
  let component: DrawerShowcaseComponent;
  let fixture: ComponentFixture<DrawerShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
