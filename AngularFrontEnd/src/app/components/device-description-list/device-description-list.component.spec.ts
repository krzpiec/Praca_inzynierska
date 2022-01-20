import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDescriptionListComponent } from './device-description-list.component';

describe('DeviceDescriptionListComponent', () => {
  let component: DeviceDescriptionListComponent;
  let fixture: ComponentFixture<DeviceDescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDescriptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
