import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGetComponent } from './emp-get.component';

describe('EmpGetComponent', () => {
  let component: EmpGetComponent;
  let fixture: ComponentFixture<EmpGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
