import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraBinariaComponent } from './calculadora-binaria.component';

describe('CalculadoraBinariaComponent', () => {
  let component: CalculadoraBinariaComponent;
  let fixture: ComponentFixture<CalculadoraBinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraBinariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraBinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
