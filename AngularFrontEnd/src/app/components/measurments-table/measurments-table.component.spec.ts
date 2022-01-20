import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurmentsTableComponent } from './measurments-table.component';

describe('MeasurmentsTableComponent', () => {
  let component: MeasurmentsTableComponent;
  let fixture: ComponentFixture<MeasurmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurmentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
