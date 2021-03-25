import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchShowcaseComponent } from './switch-showcase.component';

describe('SwitchShowcaseComponent', () => {
  let component: SwitchShowcaseComponent;
  let fixture: ComponentFixture<SwitchShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
