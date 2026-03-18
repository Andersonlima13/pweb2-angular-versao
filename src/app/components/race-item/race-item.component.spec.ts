import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceItemComponent } from './race-item.component';

describe('RaceItemComponent', () => {
  let component: RaceItemComponent;
  let fixture: ComponentFixture<RaceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
