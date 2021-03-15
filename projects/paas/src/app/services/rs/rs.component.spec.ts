import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsComponent } from './rs.component';

describe('MsComponent', () => {
  let component: RsComponent;
  let fixture: ComponentFixture<RsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
