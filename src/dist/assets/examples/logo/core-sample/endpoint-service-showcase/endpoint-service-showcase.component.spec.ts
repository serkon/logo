import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointServiceShowcaseComponent } from './endpoint-service-showcase.component';

describe('EndpointServiceShowcaseComponent', () => {
  let component: EndpointServiceShowcaseComponent;
  let fixture: ComponentFixture<EndpointServiceShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointServiceShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointServiceShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
