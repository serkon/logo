import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabShowcaseComponent } from './tab-showcase.component';

describe('TabShowcaseComponent', () => {
  let component: TabShowcaseComponent;
  let fixture: ComponentFixture<TabShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
