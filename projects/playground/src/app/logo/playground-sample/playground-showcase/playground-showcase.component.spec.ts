import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundShowcaseComponent } from './playground-showcase.component';

describe('PlaygroundShowcaseComponent', () => {
  let component: PlaygroundShowcaseComponent;
  let fixture: ComponentFixture<PlaygroundShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
