import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurmentsStatisticsComponent } from './measurments-statistics.component';

describe('MeasurmentsStatisticsComponent', () => {
  let component: MeasurmentsStatisticsComponent;
  let fixture: ComponentFixture<MeasurmentsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurmentsStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurmentsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
