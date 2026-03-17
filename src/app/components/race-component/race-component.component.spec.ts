import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceComponentComponent } from './race-component.component';

describe('RaceComponentComponent', () => {
  let component: RaceComponentComponent;
  let fixture: ComponentFixture<RaceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
