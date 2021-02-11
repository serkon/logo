import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletpointComponent } from './bulletpoint.component';

describe('BulletpointComponent', () => {
  let component: BulletpointComponent;
  let fixture: ComponentFixture<BulletpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulletpointComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
