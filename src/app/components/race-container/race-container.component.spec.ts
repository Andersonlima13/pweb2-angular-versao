import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceContainerComponent } from './race-container.component';

describe('RaceContainerComponent', () => {
  let component: RaceContainerComponent;
  let fixture: ComponentFixture<RaceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
