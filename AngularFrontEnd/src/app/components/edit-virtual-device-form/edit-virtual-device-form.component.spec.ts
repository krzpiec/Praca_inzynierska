import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVirtualDeviceFormComponent } from './edit-virtual-device-form.component';

describe('EditVirtualDeviceFormComponent', () => {
  let component: EditVirtualDeviceFormComponent;
  let fixture: ComponentFixture<EditVirtualDeviceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVirtualDeviceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVirtualDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
