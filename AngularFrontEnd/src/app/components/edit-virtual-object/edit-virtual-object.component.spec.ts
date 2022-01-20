import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVirtualObjectComponent } from './edit-virtual-object.component';

describe('EditVirtualObjectComponent', () => {
  let component: EditVirtualObjectComponent;
  let fixture: ComponentFixture<EditVirtualObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVirtualObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVirtualObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
