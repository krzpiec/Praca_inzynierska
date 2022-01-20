import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVirtualDeviceFormComponent } from './add-virtual-device-form.component';

describe('AddVirtualDeviceFormComponent', () => {
  let component: AddVirtualDeviceFormComponent;
  let fixture: ComponentFixture<AddVirtualDeviceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVirtualDeviceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVirtualDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
