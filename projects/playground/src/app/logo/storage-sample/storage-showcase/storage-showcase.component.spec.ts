import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageShowcaseComponent } from './storage-showcase.component';

describe('StorageShowcaseComponent', () => {
  let component: StorageShowcaseComponent;
  let fixture: ComponentFixture<StorageShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
