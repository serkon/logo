import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserListComponent } from './browser-list.component';

describe('BrowserListComponent', () => {
  let component: BrowserListComponent;
  let fixture: ComponentFixture<BrowserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowserListComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
