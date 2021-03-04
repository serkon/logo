import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedConnectComponent } from './speed-connect.component';

describe('SpeedConnectComponent', () => {
  let component: SpeedConnectComponent;
  let fixture: ComponentFixture<SpeedConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeedConnectComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
