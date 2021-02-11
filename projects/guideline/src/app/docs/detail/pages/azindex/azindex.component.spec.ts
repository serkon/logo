import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzindexComponent } from './azindex.component';

describe('AzindexComponent', () => {
  let component: AzindexComponent;
  let fixture: ComponentFixture<AzindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AzindexComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
