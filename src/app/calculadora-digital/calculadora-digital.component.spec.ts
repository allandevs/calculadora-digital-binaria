import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDigitalComponent } from './calculadora-digital.component';

describe('CalculadoraDigitalComponent', () => {
  let component: CalculadoraDigitalComponent;
  let fixture: ComponentFixture<CalculadoraDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
