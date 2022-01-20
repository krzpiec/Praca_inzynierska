import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVirtualObjectComponent } from './add-virtual-object.component';

describe('AddVirtualObjectComponent', () => {
  let component: AddVirtualObjectComponent;
  let fixture: ComponentFixture<AddVirtualObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVirtualObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVirtualObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
