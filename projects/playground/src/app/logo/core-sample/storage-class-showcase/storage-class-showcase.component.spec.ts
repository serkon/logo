import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageClassShowcaseComponent } from './storage-class-showcase.component';

describe('StorageClassShowcaseComponent', () => {
  let component: StorageClassShowcaseComponent;
  let fixture: ComponentFixture<StorageClassShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StorageClassShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageClassShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
