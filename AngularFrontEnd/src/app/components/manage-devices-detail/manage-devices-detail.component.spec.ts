import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDevicesDetailComponent } from './manage-devices-detail.component';

describe('ManageDevicesDetailComponent', () => {
  let component: ManageDevicesDetailComponent;
  let fixture: ComponentFixture<ManageDevicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDevicesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDevicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
