import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcfsComponent } from './rcfs.component';

describe('MsComponent', () => {
  let component: RcfsComponent;
  let fixture: ComponentFixture<RcfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RcfsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
