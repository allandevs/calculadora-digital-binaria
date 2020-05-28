import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoComponent } from './apresentacao.component';

describe('ApresentacaoComponent', () => {
  let component: ApresentacaoComponent;
  let fixture: ComponentFixture<ApresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
