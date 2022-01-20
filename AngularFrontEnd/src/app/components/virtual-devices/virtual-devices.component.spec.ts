import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualDevicesComponent } from './virtual-devices.component';

describe('VirtualDevicesComponent', () => {
  let component: VirtualDevicesComponent;
  let fixture: ComponentFixture<VirtualDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
