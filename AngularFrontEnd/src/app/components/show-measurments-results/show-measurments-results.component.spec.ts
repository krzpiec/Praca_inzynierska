import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMeasurmentsResultsComponent } from './show-measurments-results.component';

describe('ShowMeasurmentsResultsComponent', () => {
  let component: ShowMeasurmentsResultsComponent;
  let fixture: ComponentFixture<ShowMeasurmentsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMeasurmentsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMeasurmentsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
