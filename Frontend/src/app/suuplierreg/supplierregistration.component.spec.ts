import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierregistrationComponent } from './supplierregistration.component';

describe('SupplierregistrationComponent', () => {
  let component: SupplierregistrationComponent;
  let fixture: ComponentFixture<SupplierregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
