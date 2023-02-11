import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerComponent } from './suppiler.component';

describe('SuppilerComponent', () => {
  let component: SuppilerComponent;
  let fixture: ComponentFixture<SuppilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppilerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
