import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudFooterComponent } from './cloud-footer.component';

describe('CloudFooterComponent', () => {
  let component: CloudFooterComponent;
  let fixture: ComponentFixture<CloudFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudFooterComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
