import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreServicesComponent } from './core-services.component';

describe('CoreServicesComponent', () => {
  let component: CoreServicesComponent;
  let fixture: ComponentFixture<CoreServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreServicesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
