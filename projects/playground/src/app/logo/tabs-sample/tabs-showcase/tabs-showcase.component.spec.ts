import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsShowcaseComponent } from './tabs-showcase.component';

describe('TabShowcaseComponent', () => {
  let component: TabsShowcaseComponent;
  let fixture: ComponentFixture<TabsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
