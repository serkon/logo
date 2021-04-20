import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfsComponent } from './hfs.component';

describe('MsComponent', () => {
  let component: HfsComponent;
  let fixture: ComponentFixture<HfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HfsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
